import {useTranslation} from "react-i18next";
import {User} from "../../../../../../api/user";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {getDate} from "../../../../../../commons/getDate";

export type ListUserTab_TableComponentAttrs = {
    data: User[];
}

export const ListUserTab_TableComponentRow = ({item}: {item: User}) => {
    const getCreatedAtAsString = () => getDate(item.createdAt);

    return (
        <TableRow>
            <TableCell>
                {item.id}
            </TableCell>

            <TableCell>
                {item.username}
            </TableCell>

            <TableCell>
                {item.emailAddress}
            </TableCell>

            <TableCell>
                {getCreatedAtAsString()}
            </TableCell>

            <TableCell>
                <!-- OPERATIONS GOES HERE. -->
                actually no operations
            </TableCell>
        </TableRow>
    )
}

export const ListUserTab_TableComponent = ({data}: ListUserTab_TableComponentAttrs) => {
    const {t} = useTranslation();

    const headerName = (h: string) => {
        return t(`_admin.manage-users.list-user-tab.table.headers.${h}`);
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            {headerName("id")}
                        </TableCell>

                        <TableCell>
                            {headerName("username")}
                        </TableCell>

                        <TableCell>
                            {headerName("emailAddress")}
                        </TableCell>

                        <TableCell>
                            {headerName("createdAt")}
                        </TableCell>

                        <TableCell>
                            {headerName("actions")}
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data?.map(item => <ListUserTab_TableComponentRow item={item} key={item.id}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}