

//create the calculator class : most ideal since we are storing all info being typed onto a screen

class Calculator{
    //only use the two numbers we need as the methods and everything as properties
    constructor (prev_num,cur_num){
    this.prev_num=prev_num
    this.cur_num=cur_num
    this.cancel()
    }

    //defining all functions and their roles inthe program
    cancel(){
        //should be able to clear the screen

        //this sets everything to null
        this.cur_num=''
        this.prev_num=''
        this.operat=undefined

    }

    delet(){
        //should be able to delete anything on screen
        //takeall the char from first-0 to last--1 and deletes using the slice function
        this.currOperator=this.currOperator.toString().slice(0,-1)
    }
    appendnums(num){
        //called whenever a number is clicked 
        //use conditionn to avoid having two periods
        if (num==='.' && this.cur_num.includes('.')) return //if num has a period & includes a period , proceed else retun nothing
        //this should be on top of display since we pass then number first then call the display
        this.currOperator=this.currOperator?.toString() + num?.toString() //we made a variable to store the args then converted them to string so that they can contiously be added to string
    }
    appendOperator(operator){
        if(this.cur_num==='')return
        if(this.prev_num !== ''){
            this.compute()
        }
        //called when an oprator is clicked
        this.operator=operator //set the args to a variable
        this.prev_operand=this.currOperator//set the prev to current
        this.currOperator='' //then clear  out the new operand

    }
    compute(){
        //all computations done here
        let result 
        //convert our actual numbers to float and store them in variables
        const prev=parseFloat(this.prev_operand)
        const curr=parseFloat(this.currOperator)

        //checkif user entered anything, if not then return nothing
        if(isNaN(prev)||isNaN(curr)) return
        //now check the operator and do the appropriate calculation
        switch(this.operator){
            case '+':
                result=prev+curr
                break
            case '-':
                result=prev-curr
                break
            case '*':
                result=prev*curr
                break
            case '/':
                result=prev/curr
                break
            default :
            return
        }
        //after doind so, we set the current oprationn to the result,operation to undfined and previous = empty
        this.currOperator=result
        this.operator=undefined
        this.prev_operand=''


    }


    screen_display(){
        //should get updated everytime theres an operation
        this.cur_num.innerText=this.currOperator
        this.prev_num.innerText=this.prev_operand
    }


   
}
//selecting items for manipulation

const operat=document.querySelectorAll('[data-operators]')
const calcnumbers=document.querySelectorAll('[data-numbers]')
const clear=document.querySelector('[data-allclear]')
const deleting=document.querySelector('[data-delete]')
const equals=document.querySelector('[data-equals]')
const prev_num=document.querySelector('[data-previousnum]')
const cur_num=document.querySelector('[data-currentnum]')

//creating an object so that we can easily access everthing inside the class
const calculator= new Calculator (prev_num,cur_num)//do not forget to pass in the args or methods

//for the numbers
calcnumbers.forEach(button => { //using the buttons selector ,select everything
    button.addEventListener('click',()=>{ //add an event listener to each button inthis loop
        calculator.appendnums(button.innerText) //using the oblect , call the appendnums method and pass the innertext of the button as an args
        calculator.screen_display() // call this function
    })
  
})

//for the oprators
operat.forEach(button => { //using the buttons selector ,select everything
    button.addEventListener('click',()=>{ //add an event listener to each button inthis loop
        calculator.appendOperator(button.innerText) //using the oblect , call the appendnums method and pass the innertext of the button as an args
        calculator.screen_display() // call this function
    })
  
    
})
 //for the equlas
 equals.addEventListener('click',()=>{//if we click on = button, itll call the compute fu and the display function
    calculator.compute()
    calculator.screen_display()

 })
  //for clear
clear.addEventListener('click',()=>{//if we click on = button, itll call the compute fu and the display function
    calculator.cancel()
    calculator.screen_display()

 })

 //for delete
deleting.addEventListener('click',()=>{//if we click on = button, itll call the compute fu and the display function
    calculator.delet()
    calculator.screen_display()

 })



//event listeners

//number buttons on click
