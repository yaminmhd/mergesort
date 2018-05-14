// console.log(`Hi my name is ${name}`);
// var name = 'Yamin';
// console.log(name);

// const x ={a: 'hello'};
// x.b = 'testing';
// console.log(x);

// for(var i =0; i< 10; i++){
//   console.log(i)
// }

//console.log(i);

// for(let i = 1; i<= 10; i ++){
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }


const example = function(){
  console.log(this);
}
  /*
  sayName: () => {
    console.log(this);
    always {} as arrow function don't have its value of this.
    The this in arrow function is inherited from the containing scope.
    The containing scope is an object
    console.log(this.name); // undefined
  }
  */
example();


//simulate this inside an method's function -> method refering to an object's function
//this always refers to owner of the function it is in.
//for this case this.name will be undefined as the this is refering to window/global object
const person = {
  name: 'yamin',
  tasks: ['ride', 'code', 'game'],
  dailyRoutine: function(){
    //one way to go around this issue is to assign the value of this to another variable and
    //pass that variable into the another function so that the context of this is passed along
    //to the other function
    //var that=this;
    this.tasks.forEach(function(task){
      //console.log(this); //global object
      console.log(`${this.name} ${task} on the daily!`);
    }.bind(this));
  }
}

person.dailyRoutine();