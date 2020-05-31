
// extract text from a html string
export const ExtractContent = (s) => {
    let span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
}
// get available categories from database
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


// get article titile and preview text from database to show on home page
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
        return callback(err, null)
    }
})

// token validate request 
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

// email validate function 
// we can store regex string in a separate file as we need
export const ValidateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}