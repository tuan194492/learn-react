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

const getRelatedNews = (currentNewId) => {
    let newList = []
    for (let i = 0; i < 5; i ++) {
      newList.push({id: i})
    
    }
    return newList;
};

const newService = {
    getNewsByUserId,
    addNew,
    deleteNew,
    getRelatedNews
};

export default newService;