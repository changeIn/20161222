
arr 的 sort方法：
```
let arr = [1,4,8,24,6,3,0,6];
arr.sort(function(a,b){
    return a-b
})
console.log(arr)
```
简短写法：箭头函数
```
arr.sort((a,b)=> a-b )
```

this.Arg 的使用
```
let user = {
    age:18,
    younger(otherUser){
        return otherUser.age < this.age;
    }
};
let users = [
    {age:12},
    {age:26},
    {age:9}
];
//找到比 user 小的所有 users
let youngerUsers = users.filter(user.younger,user);
alert(youngerUsers.length);
```
将连接符的英文字符转为驼峰命名
```
//方法一：
function camelCase(str){
    let strArr = str.split('');
    for (let i=1;i<strArr.length;i++){
        if(strArr[i] == '-'){
            //删除 '-'
            strArr.splice(i,1);
            //转大写
            if(i<strArr.length){
                strArr[i] = strArr[i].toUppercase();
            }
        }
    }
    return strArr.join('');
}

//方法二：正则
function transformStr(str){
    var reg = /-(\w)/g;
    return str.replace(re,function($0,$1){
        return $1.toUpperCase();
    });
}
```

按年龄对用户排序
```
function sortByAge(arr){
    arr.sort((a,b)=> a.age > b.age?1:-1);
}

let john = { name:"John",age:25};
let pete = { name:"Pete",age:30};
let mary = { name:"Mary",age:27};

let userArr = [pete,john,mary];
sortByAge(userArr);
//console.log(userArr);
alert(userArr[0].name);
alert(userArr[1].name);
alert(userArr[2].name);

```


###### 随机排序
```
function shuffle(array){
    array.sort(()=>{Math.random()-0.5});
}
let shuffleArray = [1,5,2,3];
shuffle(shuffleArray);
alert(shuffleArray);
shuffle(shuffleArray);
alert(shuffleArray);
shuffle(shuffleArray);
alert(shuffleArray);
```


获取平均
```
function getAverageAge(users){
    return users.reduce((prev,user)=>prev + user.age ,0)/users.length;
}

```

数组去重
```
const a= [1,5,7,3,7,3,9,4,,8,,56,67,2]
const b= a.filter((item,index,self)=>{self.indexOf(item) === index});
console.log(b)

//es6的set方法
//利用 Array.from
function unique(arr){
    return Array.from(new Set(arr));
}

console.log(unique(a))
```


###### 写一个函数求薪水的和 Object.values 和 for ... of 
使用 Object.values 和 for ... of   循环语句写一个可以返回所有薪水的和的函数 sumSalaries(salaries)。如果 salaries 是空对象，那么结果必须是 0。
    
```
function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; 
}

let salaries ={
    "John":100,
    "Pete":300,
    "Mary":8000,
};
alert(sumSalaries(salaries));
```

```
```

###### Write a function count(obj) that returns the number of properties in the object:
```
function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
```




###### 哪个更快
```
function diffSubtract(date1,date2){
    return date2- date1;
}

function diffGetTime(date1,date2){
    return date2.getTime() - date1.getTime();
}

function bench(f){
    let date1 = new Date(0);
    let date2 = new Date();
    let start = Date.now();
    for(let i = 0; i<100000;i++){
        f(date1,date2);
    }
    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;
//
for(let i = 0;i<10;i++){
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}

console.log(`Total time for diffSubtract:` + time1 );
console.log(`Total time for diffGetTime:` + time2 );
```
结果：
```
Total time for diffSubtract:3905 
Total time for diffGetTime:99
```


######  展示星期数
```
function getWeekDay(date){
    let days=["SUN","MON","TUS","WEN","THR","FRI","SAT"];
    return days[date.getDay()];
}

let date = new Date(2019,11,25);
console.log(getWeekDay(date))
```

###### 获取指定某月的天数
```
function getLastDayOfMonth(year,month){
    let date= new Date(year,month+1,0);
    return date.getDate();
}
console.log(getLastDayOfMonth(2016,0));
console.log(getLastDayOfMonth(2016,1));

//结果
//31
//29
```


