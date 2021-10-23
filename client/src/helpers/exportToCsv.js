import {downloadFile} from './downloadFile';
import {users} from './users';

export const exportToCsv = e => {
    e.preventDefault();
    let headers = ["Id,Name,Surname,Age"];

    let usersCsv = users.reduce((acc, user) => {
        const { id, name, surname, age } = user;
        acc.push([id, name, surname, age].join(","));
        return acc;
    }, []);

    downloadFile({
        data: [...headers, ...usersCsv].join("\n"),
        fileName: "users.csv",
        fileType: "text/csv",
    });
};