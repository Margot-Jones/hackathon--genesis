import {downloadFile} from './downloadFile';

export const exportToCsv = (post) => {
    let headers = ["Title, Image"];

    const { title, image } = post;

    const usersCsv = [title, image].join(",");

    downloadFile({
        data: [...headers, usersCsv].join("\n"),
        fileName: "post.csv",
        fileType: "text/csv",
    });
};