import {useEffect, useState} from "react";
import {AdminService} from "../../../../services/admin/adminService";

export function useAdminStatus(): boolean {
    const [isAdmin, setAdmin] = useState(false);

    useEffect(() => {
        AdminService.isAdmin()
            .then(setAdmin)
            .catch(() => {}) // TODO
    }, []);

    return isAdmin;
}