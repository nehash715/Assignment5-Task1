import React,{Component} from "react";
class Task1 extends Component{
    state={
       prod: [{product:"Pepsi", sales:[2,5,8,10,5]},
{product:"Coke", sales:[3,6,5,4,11,5]},
{product:"5Star", sales:[10,14,22]},
{product:"Maggi", sales:[3,3,3,3,3]},
{product:"Perk", sales:[1,2,1,2,1,2]},
{product:"Bingo", sales:[0,1,0,3,2,6]},
{product:"Gems", sales:[3,3,1,1]}],
click:-1,
btn:['Sort by product','Sort by total Asc','Sort by total Dsc'],
display1:-1,



    }
    sortNames=(n1,n2)=>{

      return n1?.product.localeCompare(n2?.product)
  }
 asctotal=(t1,t2)=>{
  return t1.sales.reduce((acc,curr)=>{
      acc=acc+curr;
      return acc
   },0)-t2.sales.reduce((acc,curr)=>{
      acc=acc+curr;
      return acc
   },0)
 }
 dsctotal=(t1,t2)=>{
   return -1*(t1.sales.reduce((acc,curr)=>{
       acc=acc+curr;
       return acc
    },0)-t2.sales.reduce((acc,curr)=>{
       acc=acc+curr;
       return acc
    },0))
  }

 detail=(index)=>{
   let s1={...this.state}
   s1.display1=s1.prod[index];
   s1.display2=-1
   s1.display3=-1
   s1.display4=-1
   //console.log(s1.display1)
   this.setState(s1);


 }
 detail1=(index)=>{
   let s1={...this.state};
let {prod}=this.state
   let name=[...prod]
   name.sort(this.sortNames)
   s1.display1=name[index];
   this.setState(s1)
 }
 detail2=(index)=>{
   let s1={...this.state};
   let {prod}=this.state
      let name=[...prod]
      name.sort(this.asctotal)
      s1.display1=name[index];
      this.setState(s1)
 }
 detail3=(index)=>{
   let s1={...this.state};
   let {prod}=this.state
      let name=[...prod]
      name.sort(this.dsctotal)
      s1.display1=name[index];
      this.setState(s1)
 }
    display=(index)=>{
      let s1={...this.state}
      s1.click=index;
      //console.log(s1.click)
      this.setState(s1)
    }

    render(){
         let {prod,btn,click,display1}=this.state
         let name=[...prod]
         name.sort(this.sortNames)
         let name2=[...prod]
         name2.sort(this.asctotal)
         let name3=[...prod]
         name3.sort(this.dsctotal)
         return (
            <div className="container">
             
          {btn.map((p,index)=>{
            return <button className="btn btn-primary m-2" onClick={()=>this.display(index)}>{p}</button>
          })}
            
         <div className="row border bg-dark text-white">
             <div className="col-4 border" >Product</div>
             <div className="col-4 border text-center">Total Sales</div>
             <div className="col-4 border text-center">Details</div>
            
          </div>
             {click===-1?  prod.map((st,index)=>{
            return( 
            <div className="row border ">
            <div className="col-4 border">{st.product}</div>
            <div className="col-4 border text-center">{st.sales.reduce((acc,curr)=>{
               acc=acc+curr;
               return acc
            },0)
            }</div>
            <div className="col-4 border text-center"><button className="btn btn-primary btn-sm" onClick={()=>this.detail(index)}>Details</button></div>
            
         </div>
         );
            
        }):""}
        
        
{click===0?name.map((st,index)=>{
            return( 
            <div className="row border ">
            <div className="col-4 border">{st.product}</div>
            <div className="col-4 border text-center">{st.sales.reduce((acc,curr)=>{
               acc=acc+curr;
               return acc
            },0)
            }</div>
            <div className="col-4 border text-center"><button className="btn btn-primary btn-sm" onClick={()=>this.detail1(index)}>Details</button></div>
            
         </div>
         );
            
        }):""}



{click===1?  name2.map((st,index)=>{
            return( 
            <div className="row border ">
            <div className="col-4 border">{st.product}</div>
            <div className="col-4 border text-center">{st.sales.reduce((acc,curr)=>{
               acc=acc+curr;
               return acc
            },0)
            }</div>
            <div className="col-4 border text-center"><button className="btn btn-primary btn-sm" onClick={()=>this.detail2(index)}>Details</button></div>
            
         </div>
         );
            
        }):""}

{click===2?  name3.map((st,index)=>{
            return( 
            <div className="row border ">
            <div className="col-4 border">{st.product}</div>
            <div className="col-4 border text-center">{st.sales.reduce((acc,curr)=>{
               acc=acc+curr;
               return acc
            },0)
            }</div>
            <div className="col-4 border text-center"><button className="btn btn-primary btn-sm" onClick={()=>this.detail3(index)}>Details</button></div>
            
         </div>
         );
            
        }):""}
          {display1===-1?"":<div className="container">
           <h5>{display1.product}</h5>
             {display1?.sales.map((p)=>{
                return <ul>
               <li>{p}</li>
            </ul>
          })} </div>}
        
      </div>



         )
    }
}
export default Task1;