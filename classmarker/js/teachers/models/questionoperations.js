var questionOperations = {
    questions : [],
    add(question){
        this.questions.push(question);
    },
    delete(){
       return  this.questions =  this.questions.filter(qobj=>qobj.isMarked==false);
    },
    countMark(){
        return this.questions.filter(qobj=>qobj.isMarked).length;
    },
    toggleMark(id){
    //     let questionObject = this.search(id);
    //    questionObject.toggle();
   this.search(id).toggle();
       
    },
    search(id){
       return this.questions.find(questionObject=>questionObject.id==id);
    },
    update(){

    },
    sort(){

    }
};
