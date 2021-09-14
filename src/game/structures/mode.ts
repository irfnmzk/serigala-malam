export type RoleGuide = {
  min: number;
  guide: string[];
};

export type Mode = {
  name: string;
  minPlayer: number;
  maxPlayer: number;

  roleGuide: RoleGuide[];
  fill: string[];
};

export function extractGuide(guide: string[]) {
  const roles: string[] = [];

  for (const role of guide) {
    const match = /(\w+)\(?(-?\d+)?\)?/g.exec(role);
    if (match) {
      const name = match[1];
      const count = parseInt(match[2]);

      if (!isNaN(count)) {
        roles.push(...Array(count).fill(name));
      } else {
        roles.push(name);
      }
    }
  }

  return roles;
}

export function generateSetup(mode: Mode, numPlayer: number) {
  const { roleGuide, fill } = mode;
  const roles: string[] = [];

  // find roleguide based on numPlayer
  const guideIndex = roleGuide.findIndex((guide) => guide.min === numPlayer);

  if (guideIndex > -1) {
    // merge guide from index 0 to guideindex + 1
    const mergedGuide = roleGuide
      .slice(0, guideIndex + 1)
      .map((item) => item.guide)
      .flat();

    roles.push(...extractGuide(mergedGuide));
  }

  // fill empty slot from fill keys
  if (roles.length < numPlayer) {
    const diff = numPlayer - roles.length;
    const fills = Array.from(
      new Array(diff),
      () => fill[Math.floor(Math.random() * fill.length)]
    );

    roles.push(...fills);
  }

  return roles;
}
