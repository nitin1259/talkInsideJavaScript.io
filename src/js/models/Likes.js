export class Likes{
    constructor(){
        this.likes = [];
    }

    addLike(id, title, author, img){
        const like = {id, title, author, img}
        this.likes.push(like)

        // store the likes into localStorage
        this.restoreLike()
        
        return like;
    }

    deleteLike(id){
        const index = this.likes.findIndex(el => el.id ===id);
        this.likes.splice(index,1);
        
        // store the likes into localStorage
        this.restoreLike()

        
    }

    isLiked(id){
        return this.likes.findIndex(el=>el.id===id) !== -1 ;
    }

    getLikes(){
        return this.likes.length;
    }

    restoreLike(){
        localStorage.setItem('likes', JSON.stringify(this.likes));
        console.log(localStorage.getItem('likes'))
    }

    readStorage(){
        const storeLikes = JSON.parse(localStorage.getItem('likes'));
        if(storeLikes) this.likes = storeLikes; 
    }
}