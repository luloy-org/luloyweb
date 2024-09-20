
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
    {item:"Red Horse",quan:3}
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
  id:Math.random(),
  name:'Regie',
  des:'Sup lil nigs',
  img:null,
  icon:'wrench'
 },
 {
  id:Math.random(),
  name:'Jasper B. tongbakal',
  des:'ryimy',
  img:null,
  icon:"wrench"
 },
 {
  id:Math.random(),
  name:'Jed',
  img:'jed.jpg',
  icon:"award-fill"
 },
 {
  id:Math.random(),
  name:'Rey',
  img:null,
  des:NaN,
  icon:"shield-fill-check"
 },
 {
  id:Math.random(),
  name:'Einjel Ganzagan',
  img:'enjel.jpg',
  icon:"database-fill-gear"
 },
 {
  id:Math.random(),
  name:'Julbading Riopay'
 },
 {
  id:Math.random(),
  name:'Terrence Roxas',
  icon:'tools'
 },
 {
  id:Math.random(),
  name:'Alexander Pinapit',
  des:'Alex V2',
  icon:'hammer'
 },
 {
  id:Math.random(),
  name:'Eljay D. Nagalulu'
 }
]