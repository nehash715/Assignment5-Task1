import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlightNav from './FlightNav'
import { faCheck, faCircle, faCoffee, faPlane, faRightLong, faUser } from '@fortawesome/free-solid-svg-icons'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
//import { faCircle } from '@fortawesome/free-solid-svg-icons'

import moment from 'moment'
import Calendargt from './Calendargt'
import CalendarReturn from './CalendarReturn'
import CheckInCal from './CheckInCal'
import CheckOutCal from './CheckOutCal'
export default class Flight extends Component {
 state={
  domestic:  [{origin: "New Delhi", dest: "Bengaluru", date: "Wed,3 Oct,2023", amount: 3590},
    {origin: "New Delhi", dest: "Mumbai", date: "Sun,13 Oct,2023", amount: 2890}
    ,{origin: "Hyderabad", dest: "Bengaluru", date: "Mon,30 Sep,2023", amount: 2150},
    {origin: "Mumbai", dest: "Pune", date: "Sun,6 Oct,2023", amount: 1850}],
flight: [{img: "https://i.ibb.co/SQ7NSZT/hol1.png",place: "Australia",price: "177,990",days: "9 Nights / 10 Days"},
{img: "https://i.ibb.co/Wxj50q1/hol2.png",place: "Europe",price: "119,990",days: "6 Nights / 7 Days"},{img: "https://i.ibb.co/VY3XNZr/hol3.png",place: "New Zealand",price: "199,990",days: "6 Nights / 7 Days"},{img: "https://i.ibb.co/j4NNc35/hol4.jpg",place: "Sri Lanka",price: "18,999",days: "4 Nights / 5 Days"},{img: "https://i.ibb.co/ct6076f/hol5.jpg",place: "Kerala",price: "12,999",days: "4 Nights / 5 Days"},{img: "https://i.ibb.co/vB0CpYK/hol6.jpg",place: "Char Dham",price: "22,999",days: "4 Nights / 5 Days"}]
 ,
 showFlight:-1,
 from:[ "New Delhi","Hyderabad","Mumbai"],
 to:["Bengaluru","Mumbai","Pune"],
 deptfrom:'',
 destination:'',
 
uparrow:0,
persons:{adult:1,child:0,infants:0},
flightclass:["Economy","Premium Economy","Business"],
classflight:"",
showCalendar:false,
hotelsarr:[
    {display:"choose Hotel",value:""},
    {display:"NewDelhi,Delhi,India(3603hotels)",value:"NewDelhi"},
{display:"Bengaluru,Karnataka,India(2781hotels)",value:"Bengaluru"},
{display:"Mumbai,Maharashtra,India(3188hotels)",value:"Mumbai"},
{display:"Pune,Maharashtra,India(1419hotels)",value:"Pune"},
{display:"Jaipur,Rajasthan,India(1822hotels)",value:"Jaipur"},
{display:"Goa,Goa,India(4125hotels)",value:"Goa"},
{display:"Kolkata,WestBengal,India(2466hotels)",value:"Kolkata"},
{display:"Bangkok,Thailand",value:"Bangkok"},
{display:"Singapore,Singapore",value:"Singapore"}],
hotel:"",
montharr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
month:'',
count:0,
count1:0,
chosereturn:false,
year:'2023',
searchFligh:false,
returndate:"",
showReturnCalendar:false,
monthReturn:'',
flightClass:"",
checkIndate:moment().format("DD,MMM,YYYY"),
checkOutdate:moment().add(1,"d").format("DD,MMM,YYYY"),
checkInCalShow:false,
checkOutCalShow:false,
hoteluparrow:false,
roomNo:2,
room:{adult:2,child:0},
roomarr:[{room:1,adult:2,child:0}]

}

flight=(char)=>{
    if(char=='1'){
        this.setState({showFlight:1})
    }
   else if(char=='2'){
    this.setState({showFlight:2})
   }
   else if(char=='3'){
    this.setState({showFlight:3})
   } else if(char=='4'){
    this.setState({showFlight:4})
   }
}


handleChange=(e)=>{
       
    
     let s1={...this.state}
     s1[e.currentTarget.name]=e.currentTarget.value;
    
     this.setState(s1)


       let a=s1.domestic.find((p)=>{
        return p.origin==s1.deptfrom 
       })

      if(+a?.date.substring(4,6)<10){
        console.log('true')
         this.setState({month:a?.date.substring(6)})
    }
    else{

    
    console.log("a",   a?.date.substring(7))
    this.setState({month:a?.date.substring(7)})
    }
    this.setState({chosereturn:false})
 }

 uparrow=()=>{
    this.setState({uparrow:1})
 }
 downarrow=()=>{
    this.setState({uparrow:0})
 }

 hoteluparrow=()=>{
    this.setState({hoteluparrow:true})
 }
 hoteldownarrow=()=>{
    this.setState({hoteluparrow:false})
 }
 dec=(str)=>{
    let {persons}=this.state
    if(str="adult"){
        if(persons.adult>0){
        persons.adult--;
        }
        else{
            persons.adult=persons.adult
        }
    }
   if(str="adult"){
        if(persons.adult>0){
        persons.adult--;
        }
        else{
            persons.adult=persons.adult
        }
    }
    if(str="child"){
        if(persons.child>0){
        persons.child--;
        }
        else{
            persons.child=persons.child
        }
    } 
      if(str="infants"){
        if(persons.infants>0){
        persons.infants--;
        }
        else{
            persons.infants=persons.infants
        }
    } 
    this.setState({persons:persons})
 }

 inc=(str)=>{
    let {persons}=this.state
    if(str=='adult'){
        persons.adult++
    }
    if(str=="child"){
        persons.child++
    }
    if(str=="infants"){
        persons.infants++
    }
    this.setState({persons:persons})
 }

showCalendar=()=>{
    let {domestic,deptfrom}=this.state
    
   
        this.setState({showCalendar:true})
    
    let a=domestic.find((p)=>{
        return p.origin==deptfrom
    })
    console.log("single",a?.date.substring(4,6),"double",a?.date.substring(4,6))
    if(+a?.date.substring(4,6)<10){
        console.log('true')
         this.setState({month:a?.date.substring(6)})
    }
    else{

    
    console.log("a",   a?.date.substring(7))
    this.setState({month:a?.date.substring(7)})
    }
}

handleNext=()=>{
    
let {month,montharr,count,count1}=this.state;
let index=montharr.findIndex((p)=>{
    return p==month
  })
  console.log(index)

  this.setState({month:montharr[index+1]})
  this.setState({count:count+1})
  if(count1>0){
    this.setState({count1:count1-1})
  }
  
}


handlePrev=()=>{
    
    let {month,montharr,count1,count}=this.state;
    let index=montharr.findIndex((p)=>{
        return p==month
      })
      console.log(index)
    
      this.setState({month:montharr[index-1]})
      this.setState({count1:count1+1})
      if(count>0){
        this.setState({count:count-1})
      }
     
    }

handleDate=(d,month,y)=>{
    console.log(d,month)
    let s1={...this.state}
    let name=s1.montharr[month]
    //let {month,deptfrom}=this.state;
    
    let a=s1.domestic.find((p)=>{
        return p.origin==s1.deptfrom 
       })
  a.date=`Mon,${d} ${name} ${y}`
  s1.year=y
  s1.showCalendar=false
console.log(a.date)
  this.setState(s1)

}



choseReturn=()=>{
this.setState({chosereturn:true})
let {montharr,year,month,domestic,deptfrom,chosereturn,destination}=this.state
  let index=montharr.findIndex((p)=>{
        return p==month
       })
 let a=domestic.find((p)=>{
        return p.origin==deptfrom && p.dest==destination
       })
       let today=+a?.date.substring(4,6)
const today1 = new Date(`${year}-${index+1}-${today}`);
   today1.setDate(today1.getDate() + 1)
console.log(`${year}-${index+1}-${today}`,"tomorow",today1.toDateString())
console.log("tom2", today1.getDate(),"tomMon",montharr[today1.getMonth()],"tomYera",today1.getFullYear())
 let returndate=`${today1.getDate()},${montharr[today1.getMonth()]},${year}`
 if(a){

 
this.setState({returndate:returndate})
 }
 else{
    alert("Choose cities")
 }
 
}


showCalendarReturn=()=>{
    this.setState({showReturnCalendar:true})
    let {returndate}=this.state
    //console.log("returnMonth", returndate.substring(2,5))
    this.setState({monthReturn:returndate.substring(2,5)})
}


handleReturnDate=(d,month,y)=>{
      console.log(d,month)
    let s1={...this.state}
  s1.returndate=`${d},${s1.montharr[month]},${y}`
  
  s1.year=y
  s1.showReturnCalendar=false

  this.setState(s1)
 }


handlecheckIndate=(d,month,y)=>{
    let s1={...this.state}
    s1.checkIndate=`${d},${s1.montharr[month]},${y}`
    //s1.year=y
    s1.checkInCalShow=false;
    this.setState(s1)
}

handlecheckOutdate=(d,month,y)=>{
    let s1={...this.state}
    s1.checkOutdate=`${d},${s1.montharr[month]},${y}`
    //s1.year=y
    s1.checkOutCalShow=false
    this.setState(s1)

}

 searchFlight=()=>{
    let {domestic,deptfrom,destination,year,persons,returndate,flightclass}=this.state
    let a=domestic.find((p)=>{
        return p.origin==deptfrom && p.dest==destination
       })
    
   
alert(`from:${deptfrom} to:${destination} Depart date:${a?.date.substring(4),year} Return date:${returndate}
Number of Travellers:${persons.adult+persons.child+persons.infants} {${persons.adult}:Adults ${persons.child}:Child ${persons.infants}:Infant}  `)
    
 }


 showCheckINCal=()=>{
this.setState({checkInCalShow:true})
 }

showCheckOutCal=()=>{
    this.setState({checkOutCalShow:true})
}


decRoom=(str,room)=>{
    let s1={...this.state}
    let a=s1.roomarr.find((p)=>{
        return p.room==room
    })
    console.log(a)
    if(str=='adult' ){
        if(a.adult>0){
            a.adult--
        }
       
    }
    if(str=="child"){
        if(a.child>0){
            a.child--
        }
    }
    this.setState(s1)
}
incRoom=(str,room)=>{
    let s1={...this.state}
    let a=s1.roomarr.find((p)=>{
        return p.room==room
    })
    if(str=='adult'){
        a.adult++
    }
    if(str=='child'){
        a.child++
    }
    this.setState(s1)
}

addRoom=(room)=>{
    let s1={...this.state}
   
    
    
let json={room:room++,adult:2,child:0}
s1.roomarr.push(json)
this.setState(s1)
this.setState({roomNo:room++})
}

removeRoom=()=>{
    let s1={...this.state}
    s1.roomarr.pop()
    this.setState(s1)
}


searchRoom=()=>{
    let s1={...this.state}

    let totelhoteltraveller=s1.roomarr.reduce((acc,curr)=>{
        return acc+curr.child+curr.adult
        },0)

    alert(`Travel to:${s1.hotel},Check-in Date:${s1.checkIndate},Check-out Date:${s1.checkOutdate}, Number of Traveller:${totelhoteltraveller},Number of Room:${s1.roomarr.length}`)
}
  render() {
    let {domestic,flight,showFlight,from,to,deptfrom,destination,uparrow,persons,flightclass,classflight,showCalendar,
    hotelsarr,month,montharr,count,count1,chosereturn,year,returndate,showReturnCalendar,monthReturn,flightClass,
   checkIndate,checkOutdate,checkInCalShow,checkOutCalShow,hoteluparrow,roomNo,room,roomarr}=this.state
    console.log( "room",roomarr)
   console.log("roomNo",roomNo)

let totelhoteltraveller=roomarr.reduce((acc,curr)=>{
return acc+curr.child+curr.adult
},0)

console.log(totelhoteltraveller)

    let a=domestic.find((p)=>{
        return p.origin==deptfrom && p.dest==destination
       })

    let totalTraveller=persons.adult+persons.child+persons.infants
       //console.log("totaltraveller", totalTraveller)
       //console.log(month)
       let index=montharr.findIndex((p)=>{
        return p==month
       })

       let today=+a?.date.substring(4,6)
const today1 = new Date(`${year}-${index+1}-${today}`);
   today1.setDate(today1.getDate() + 1)
//console.log(`${year}-${index+1}-${today}`,"tomorow",today1.toDateString())

let indexreturn=montharr.findIndex((p)=>{
    return p==monthReturn
   })

//console.log("checkIndate", checkIndate.substring(3,6))
   
let checkInIndex=montharr.findIndex((p)=>{
    return p==checkIndate.substring(3,6)
})

let chechoutIndex=montharr.findIndex((p)=>{
    return p==checkOutdate.substring(3,6)
})
      // console.log("flight",month, index)
    return (
      <div className='container'>
       <FlightNav/>
       <div className='both'>
       <div className='row'>
        <div className='col-6'>
        <div className='left'>
            
        <div className='leftSide'>
        <span className="fa-layers fa-fw fa-lg " style={{marginRight:50}}>
  <FontAwesomeIcon className='icons' style={showFlight==1?{color:'red'}:{color:'black'}} icon={faCircle}  />
  <FontAwesomeIcon className='icons'   icon={faPlane} onClick={()=>this.flight('1')}  transform="shrink-6" inverse />
</span>
<span className="fa-layers fa-fw fa-lg" style={{marginRight:50}}>
  <FontAwesomeIcon className='icons' style={showFlight==2?{color:'red'}:{color:'black'}} icon={faCircle} />
  <FontAwesomeIcon className='icons'  icon={faHotel}  onClick={()=>this.flight('2')}  transform="shrink-6" inverse />
</span>
<span className="fa-layers fa-fw fa-lg" style={{marginRight:50}}>
  <FontAwesomeIcon className='icons' style={showFlight==3?{color:'red'}:{color:'black'}} icon={faCircle} />
  <FontAwesomeIcon className='icons'  icon={faBus} onClick={()=>this.flight('3')}  transform="shrink-6" inverse />
</span>
<span className="fa-layers fa-fw fa-lg" style={{marginRight:50}}>
  <FontAwesomeIcon className='icons' style={showFlight==4?{color:'red'}:{color:'black'}} icon={faCircle} />
  <FontAwesomeIcon className='icons' icon={faTaxi}  onClick={()=>this.flight('4')}  transform="shrink-6" inverse />
</span>
      
      
      

 </div>
 

       {showFlight==1?
       <>
       <br></br>
       <h4 className='text-center'>Flight</h4><br></br>
       <button className= 'btn btn-outline-primary btn-sm ' style={{marginLeft:70}} >One way</button>
       <button className={ chosereturn==true?'btn btn-primary btn-sm':'btn btn-outline-primary btn-sm'}
        style={{marginLeft:20}} onClick={()=>this.choseReturn()}>Return</button>
      
       <br></br>
       <div className='row'>
        <div className='col-5'>
            <h6>Departure from</h6>
        <div className="form-group">
                
                <select className="form-control" name="deptfrom" value={deptfrom}  onChange={this.handleChange}>
                 <option disabled value="">
                    choose
                 </option>
                 {from.map(c1=><option>{c1}</option>)}
                </select>
             </div>
        </div>
        <div className='col-2'>
        <span className="fa-layers fa-fw fa-lg" style={{marginRight:50,marginTop:30}}>
  <FontAwesomeIcon className='icons' style={{color:'rgb(154, 243, 213)'}} icon={faCircle} />
  <FontAwesomeIcon className='icons'  icon={faRightLong}    transform="shrink-6" inverse />
</span>
        </div>
        <div className='col-5'>
            <h6>Going to</h6>
        <div className="form-group">
                
                <select className="form-control" name="destination" value={destination}  onChange={this.handleChange}>
                 <option disabled value="">
                    choose
                 </option>
                 {to.map(c1=><option>{c1}</option>)}
                </select>
             </div>
        </div>
       </div>
       <div className='row'>
        <div className="col-6">
            <h6 className='departure' style={{cursor:'pointer'}}onClick={()=>this.showCalendar()} >Departue Date</h6>
            <h6 style={{cursor:'pointer'}}onClick={()=>this.showCalendar()}>{a?.date.substring(4)} </h6>
          
          {/*console.log(a?.date.substring(6))*/}
           {/*showCalendar==true?<Calendar month={month} onNext={this.handleNext} onPrev={this.handlePrev}
           count={count} count1={count1} selectdate={this.handleDate} />:""*/}
           {showCalendar==true?<Calendargt  index={index}  selectDate={this.handleDate} />:""}

        </div>
        <div className="col-6">
            <h6 style={{cursor:'pointer'}} onClick={()=>this.showCalendarReturn()}>Return Date</h6>
          {chosereturn==true && returndate!=""?<h6 style={{cursor:'pointer'}}onClick={()=>this.showCalendarReturn()}>{returndate}</h6>:  <p style={{color:'blue'}}>Book round Trip to save extra</p>}
       {showReturnCalendar==true?<CalendarReturn index={indexreturn}  selectDate={this.handleReturnDate}/>:""}
        </div>
       </div>
       <div className='row'>
        <div className="col-5">
       <h6>Traveller,class</h6>
      
       <p>{`${totalTraveller} Traveller,${flightClass}`}</p>
       </div>
       <div className="col-7">
        {uparrow==0?
        <FontAwesomeIcon className='arrow' icon={faChevronDown} onClick={()=>this.uparrow()} />
        :
        <FontAwesomeIcon className='arrow' icon={faChevronUp} onClick={()=>this.downarrow()} />
  }
       </div>  

{uparrow==1? <div className='row'>
    <div className='col-4'>
        <h6>Adult</h6>
        <button  onClick={()=>this.dec('adult')} >-</button> <button>{persons.adult}</button> <button  onClick={()=>this.inc('adult')}>+</button>
    </div>
    <div className='col-4'>
        <h6> Child</h6> 
        <button  onClick={()=>this.dec('child')}>-</button> <button>{persons.child}</button> <button  onClick={()=>this.inc('child')}>+</button>
    </div>
    <div className='col-4'>
         <h6>Infants</h6>
        <button  onClick={()=>this.dec('infants')}>-</button> <button>{persons.infants}</button> <button  onClick={()=>this.inc('infants')}>+</button>
    </div>
</div>:""}

{ uparrow==1? flightclass.map((t)=>{
                return <div className="form-check">
                 <input className="form-check-input" type="radio" name="flightClass" 
                 value={t}
                 checked={t==flightClass}
                  
                 onChange={this.handleChange}/>
                 <label className="form-check-label">{t}</label>
             </div>
           }):""}

 </div>
      <br></br>
       <button className='btn btn-primary ' style={{marginLeft:200}} onClick={()=>this.searchFlight()} >Search flight
       <FontAwesomeIcon  style={{color:'white'}} icon={faArrowRightLong} />
       </button>
       </>
       :""}


{showFlight==2?
<div>
    <br></br>
    <br></br>
<h4 style={{marginLeft:60}}>Hotels</h4>
<h6>Select City,Location,Hotel Name</h6>
        <div className="form-group">
                
                <select className="form-control" name="hotel"   onChange={this.handleChange}>
                 <option disabled value="">
                    choose hotel
                 </option>
                 {hotelsarr.map(c1=><option value={c1.value} key={c1.display}>{c1.display}</option>)}
                 
                </select>
             </div>
             <br></br>
             <div className='row'>
    <div className='col-6'>
        <h6 onClick={()=>this.showCheckINCal()}  style={{cursor:'pointer'}}>Check-in Date</h6>
        <h6  onClick={()=>this.showCheckINCal()} style={{cursor:'pointer'}}> {checkIndate}</h6>
        {checkInCalShow==true?<CheckInCal index={checkInIndex} selectDate={this.handlecheckIndate}/>:""}
        
    </div>

    <div className='col-6'>
        <h6 onClick={()=>this.showCheckOutCal()}  style={{cursor:'pointer'}}>Check-out Date</h6>
       <h6 onClick={()=>this.showCheckOutCal()}  style={{cursor:'pointer'}}>{checkOutdate}</h6> 
       {checkOutCalShow==true?<CheckOutCal index={chechoutIndex} selectDate={this.handlecheckOutdate}/>:""}
    </div>

</div>
<br></br>

<div className='row'>
    <div className='col-8'>
<h6>Traveller and Hotel</h6>
<h6>{totelhoteltraveller} Travellers,{roomarr.length} {roomarr.length>1? "Rooms":"Room"}</h6>
</div>
<div className='col-4'>

{hoteluparrow==false?
        <FontAwesomeIcon className='arrow' icon={faChevronDown} onClick={()=>this.hoteluparrow()} />
        :
        <FontAwesomeIcon className='arrow' icon={faChevronUp} onClick={()=>this.hoteldownarrow()} />
  }
  </div>

{hoteluparrow==true?
<div>
{roomarr.map((p)=>{
    return <div>

<h6>Room {p.room}:</h6>
<div className='row'>
    <div className='col-1'>
<FontAwesomeIcon icon={faUser} />
</div>
<div className='col-5'>
<h6>Adult</h6>
        <button  onClick={()=>this.decRoom("adult", p.room)} >-</button> 
        <button>{p.adult}</button> 
        <button  onClick={()=>this.incRoom("adult", p.room)}>+</button>
</div>
<div className='col-5'>
<h6>Child</h6>
        <button  onClick={()=>this.decRoom('child',p.room)} >-</button> 
        <button>{p.child}</button> 
        <button  onClick={()=>this.incRoom('child',p.room)}>+</button>
</div>
</div>
    </div>
})}


<button className="btn btn-outline-danger btn-sm" onClick={()=>this.addRoom(roomNo)} >Add Room</button>
{roomarr.length>1?<button className="btn btn-outline-danger btn-sm" onClick={()=>this.removeRoom()} >Remove</button>:""}



</div>


:""}




</div>
<br></br>
   <button className='btn btn-primary ' style={{marginLeft:200}}  onClick={()=>this.searchRoom()} >Search Rooms
       <FontAwesomeIcon  style={{color:'white'}} icon={faArrowRightLong} />
       </button>
</div>


:""}
{showFlight==3?
<div><br></br><br></br>
    <h2>Bus</h2></div>:""}
{showFlight==4?<div><br></br><br></br><h2>taxi</h2></div>:""}




      </div>
       </div>
       <div className='col-6'>
       <div className='rightSide'>
        <h6 className='text-secondary'>Flight Discount for you</h6>
        <ul className='flightDis'>
            <li><img className='dis' src='https://i.ibb.co/qdc2z7Z/ad01.png'/></li>
            <li><img  className='dis' src='https://i.ibb.co/yp0bbgz/ad02.png'/></li>
            <li><img  className='dis'src='https://i.ibb.co/DkrVrkY/ad03.png'/></li>
        </ul>
        <img className='banner' src='https://i.ibb.co/Rc9qLyT/banner1.jpg'/>
        <br></br>
        <h6 className='text-secondary'>Popular Domestic Flight Routes</h6>
        <div className="domesticDet">
        {domestic.map((p)=>{
            return <div className='domaesticbox'>
                <h6>{p.origin}</h6>
                <p className='text-secondary'>{p.date}</p>

            </div>
        })}

    </div>
       
    <div className="domesticDet">
        {domestic.map((p)=>{
            return <div className='domaesticbox'>
                <h6>{p.dest}</h6>
                <p className='text-secondary'>Starting from</p>
          <button className='btn btn-warning btn-sm'>{p.amount}</button> </div>
        })}

    </div>
       
       <h6 className='text-secondary'>Popular Holiday Destination</h6>
       <div className='holiday'>
{flight.map((p)=>{
return <div className="holidaybox">
    <div className="row">
        <div className="col-2">
           <img className='holimg' src={p.img}></img></div>
        <div className="col-10">
<h6>{p.place}</h6>
<p style={{color:'rgb(255, 47, 116)'}}>Rs.{p.price} per Person </p>
<p className='text-secondary'>{p.days}</p>
<FontAwesomeIcon  className='arrow' icon={faArrowRightLong} />
        </div>


    </div>
</div>
})}

       </div>
       </div>    
       </div>
      </div>
      </div>
      </div>
    )
  }
}
