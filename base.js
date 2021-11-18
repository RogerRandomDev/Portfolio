let root = document.documentElement;
const slot_count = 3
let cur_slot = 0;
function next_slot(val){
  cur_slot= (cur_slot+val)%slot_count;
  if(cur_slot<0){cur_slot=slot_count+cur_slot};
  update_slots();
}
function update_slots(){
    root.style.setProperty("--activeSpot0",(cur_slot!=0)*200+"%");
    root.style.setProperty('--activeSpot1',(cur_slot!=1)*200+"%");
}