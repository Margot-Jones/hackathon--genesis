import {downloadFile} from './downloadFile';
import {users} from './users';

export const exportToJson = e => {
    e.preventDefault();
    downloadFile({
        data: JSON.stringify(users),
        fileName: "users.json",
        fileType: "text/json",
    });
};