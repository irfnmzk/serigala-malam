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

  const filteredGuide = roleGuide.filter((guide) => guide.min <= numPlayer);
  const mergedGuide = filteredGuide.map((item) => item.guide).flat();
  roles.push(...extractGuide(mergedGuide));

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
