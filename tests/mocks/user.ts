import { mock } from "jest-mock-extended";
import { User } from "node-telegram-bot-api";
import { createID } from "./id";

const DEFAULT_PARAMS = {
  first_name: "Tester",
};

export type MockUserParams = {
  first_name: string;
};

export function createMockUser(params: MockUserParams = DEFAULT_PARAMS): User {
  const mockUser = mock<User>();
  mockUser.id = createID();
  mockUser.is_bot = false;
  mockUser.first_name = params.first_name;

  return mockUser;
}

export function createManyMockUser(count: number): User[] {
  const mockUsers: User[] = [];
  for (let i = 0; i < count; i++) {
    const mock = createMockUser({ first_name: `Tester #${i}` });
    mockUsers.push(mock);
  }
  return mockUsers;
}
