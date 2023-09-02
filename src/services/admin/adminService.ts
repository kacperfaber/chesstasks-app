import {UserAdminService} from "./userAdminService";

export class AdminService {
    public static isAdmin(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            UserAdminService
                .allUsersFiltered({emailLike: "", usernameLike: ""}, 0, 0)
                .then(() => resolve(true))
                .catch(() => resolve(false));
        });
    }
}