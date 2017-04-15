var employee = {
    id: 1,
    getLog: function(){
        let self = this;
        setTimeout(function(){
            console.log(self.id);
        },1000)
        setTimeout(() => console.log(this.id), 1000);
    }
}
employee.getLog();