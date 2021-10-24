import {downloadFile} from './downloadFile';

export const exportToJson = (post) => {
    downloadFile({
        data: JSON.stringify(post),
        fileName: "post.json",
        fileType: "text/json",
    });
};