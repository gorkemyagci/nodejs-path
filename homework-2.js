let blogs = [
    { title: 'Blog 1', detail: 'Blog 1 detail' },
    { title: 'Blog 2', detail: 'Blog 2 detail' }
];

function getBlogs(data) {
    return new Promise((resolve, reject) => {
        console.log("Veriler alınmaya çalışılıyor...");
        if (data) {
            resolve(data);
        } else {
            reject('Error');
        }
    })
}


function addBlog(blog) {
    return new Promise((resolve, reject) => {
        console.log("Veriler ekleniyor...");
        if (blog) {
            blogs.push(blog);
            resolve(blogs);
        } else {
            reject('Error');
        }
    })
}

async function processData() {
    try {
        const listBlog = await getBlogs(true);
        console.log(listBlog);
        const addblog = await addBlog({ title: 'Blog 3', detail: 'Blog 3 detail' });
        console.log(addblog);
    } catch (err) {
        console.log(err);
    }
}

processData();
