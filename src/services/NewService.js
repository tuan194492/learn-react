const getNewsByUserId = (userId) => {
    let newSample = {
        description: 'Hello'
    };
    const news = [];
    for (let i = 0; i < 0; i++) {
        news.push(newSample);
    }
    return news;
}

const addNew = (newData) => {

}

const deleteNew = (newData) => {
    
}

const newService = {
    getNewsByUserId,
    addNew,
    deleteNew
};

export default newService;