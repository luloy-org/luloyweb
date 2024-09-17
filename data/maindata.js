
export const Products = 
{
 "Coke": {"price":30.5},
 "Martis": {"price":8.50},
 "Modess": {"price":18.00},
 "Tampon": {"price":10.00},
 "Red Horse": {"price":50.5},
 "Milo": {"price":7.00},
 "no_order": {"price":0}
}

export function Getprice (product){
 const item = Products[product]?Products[product]:Products.no_order
 
 return item.price
}


export const Data = [
  {
   id:1,
   name:'Reymart Centeno',
   orders: [
    {item:"Coke",quan:2},
    {item:"Martis",quan:4},
    {}
   ]
  },
  {
   id:2,
   name:'Jedrick Borbon',
   orders: [
    {item:"Modess",quan:1},
    {item:"Tampon",quan:4},
    {item:"Red Horse",quan:5}
   ]
  },
  {
   id:3,
   name:'Eljay Oblino',
   orders:[
    {item:'Milo',quan:20}
   ]
  }
 ]
 
 export const Devs = [
 {
  id:1,
  name:'Regie',
  des:'Sup lil nigs',
  img:null,
  pos:'UI-D'
 },
 {
  id:2,
  name:'Jasper',
  des:'Jullyver bading',
  img:null,
  pos:'DEV'
 },
 {
  id:3,
  name:'Jed',
  img:null,
  pos:null
 },
 {
  id:4,
  name:'Rey',
  img:null,
  pos:"LD"
 }
]