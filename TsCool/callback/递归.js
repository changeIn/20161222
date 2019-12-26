



// 创建公司员工



let company = {
    sales:[
        {name:'Jone',salary:1000},
        {name:'Alice',salary:6000}
    ],
    development:{
        sites:[{name:'Peter'},{salary:2000},{name:'Alex',salary:1800}],
        internals:[{name:'Jack',salary:1300}]
    }
}

function sumSalaries(department){
    if(Array.isArray(department)){
        return department.reduce((prev,current)=>{prev+current.salary},0)
    }
}



//输出链表
function printList(list){
    let temp = list;
    while(temp){
        console.log(temp.value);
        temp = temp.next;
    }
}

function printList(list){
    console.log(list.value)
    if(list.next){
        printList(list.next)
    }
}
