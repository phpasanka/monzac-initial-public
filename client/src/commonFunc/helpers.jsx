
export const ExtractContent = (s) => {
    let span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
}

export const GetCategories = ((callback) => {
    try {
        fetch("/get/category")
            .then((res) => res.json())
            .then((res) => {
                let catList = res.map((r) => r.name);
                return callback(null, catList)
            });
    } catch (error) {
        return callback(error, null)
    }
})

export const GetArticleThumbList = ((callback) => {
    try {
        fetch("/api/article/thumbist")
            .then((res) => res.json())
            .then((res) => {
                let articleThumbList1 = res.map((value) => ({
                    title: value.title,
                    content: ExtractContent(value.preview),
                    author: value.author,
                    docId: value.docId
                }));
                return callback(null, articleThumbList1)
            });
    }
    catch (err) {
        return callback('error', null)
    }
})
export const TokenValidate = ((callback) => {
    try {
        fetch('/api/user/validateToken')
            .then((res) => res.json())
            .then((res) => {
                return callback(null, res)
            })
    } catch (error) {
        return callback(error, null)
    }
})

export const ValidateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}