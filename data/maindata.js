
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

export const positions = {
 'dev': {icon:'code-slash',text:'Developer'},
 'main': {icon:'tools',text:'Maintenance'},
 'secu': {icon:'shield-lock-fill',text:'App Security'},
 'moder': {icon:'hammer',text:'Moderator'},
 'data-sec': {icon:'database-fill-gear',text:'Database Manager'},
 'model': {icon:'boxes',text:'3D Modeler'},
 'bud': {icon:'coin',text:'Budget Manager'},
 'admin': {icon:'shield-fill-check',text:'Administrator'},
 'anim': {icon:'diamond-half',text:'Animator'}
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
  pos:['data-sec','moder','anim']
 },
 {
  id:Math.random(),
  name:'Jasper B. tongbakal',
  des:'ryimy',
  img:null,
  pos:['moder']
 },
 {
  id:Math.random(),
  name:'Jed',
  img:'jed.jpg',
  pos:['dev','admin']
 },
 {
  id:Math.random(),
  name:'Rey',
  img:null,
  des:NaN,
  pos:['admin','model']
 },
 {
  id:Math.random(),
  name:'Einjel Ganzagan',
  img:'enjel.jpg',
  pos:['model']
 },
 {
  id:Math.random(),
  name:'Julbading Riopay',
  img:'julbading.jpeg',
  pos:['main']
 },
 {
  id:Math.random(),
  name:'Terrence Roxas',
  pos:['secu','bud']
 },
 {
  id:Math.random(),
  name:'Alexander Pinapit',
  des:'Alex V2',
  img:'alexv2.jpg'
 },
 {
  id:Math.random(),
  name:'Eljay D. Nagalulu',
  pos:['moder','main']
 }
]