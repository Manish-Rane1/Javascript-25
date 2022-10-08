function clean(){
    console.clear()
}

// Progression #1: Greatest of the two numbers

function Greatest(){
     
    var int1=prompt("input first number")
    var int2 = prompt("input second number")
    if (int1<int2){
        console.log(int2+" is greater")
    } else{
        console.log(int1+" is greater")
    }
    // console.log("<br>"+"Refresh to go back")
}

// Progression #2: The lengthy word

function theLengthyWord(){
    const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
    var max=0
    words.forEach(scary)
    function scary(item,index){
    if (item.length>max){
        max=item.length
        idx=index
        }
    }
    console.log(words)
    console.log(words[idx]+" is lengthy word")
}

// Progression #3: Net Price

function NetPrice(){
     
    const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110]
    var total=0
    prices.forEach(netprice)
    function netprice(item){
        total+=item
    }
    console.log(prices)
    console.log(total+" is the total")
}

// Progression 3.1: Generic sum
function GenericSum(){
    mixadd=0
    const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
    mixedArr.forEach(mixtotal)
    function mixtotal(items){
        if ((typeof items)=='number'){
            mixadd+=items
        } else if((typeof items)=='string'){
            mixadd+=(items.length)
        } else if((typeof items)=='boolean'){
            if (items==true){
                mixadd+=1
            }
        }
    }
    console.log(mixedArr)
    console.log(mixadd+" is the generic sum of elements in array")
    // return(mixadd)
}
// should return: 463


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
function midPointOfLevels(){
     
    var total=0
    const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
    let n=numbersAvg.length
    for (var i in numbersAvg){
        total+=numbersAvg[i]
    }
    console.log(numbersAvg)
    console.log(parseInt(total/n)+" is the average of all the numbers")
}

// Progression 4.2: Array of strings
function averageLengthOfWord(){
    var total=0
    const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
    for (var i in wordsArr){
        total+=(wordsArr[i].length)
    }
    console.log(wordsArr)
    console.log(parseInt(total/(wordsArr.length))+" is the average length of words")
}

// Progression 4.3: Generic Average
function GenericAvg(){
    mixadd=0
    const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
    mixedArr.forEach(mixtotal)
    function mixtotal(items){
        if ((typeof items)=='number'){
            mixadd+=items
        } else if((typeof items)=='string'){
            mixadd+=(items.length)
        } else if((typeof items)=='boolean'){
            if (items==true){
                mixadd+=1
            }
        }
    }
    console.log(mixedArr)
    console.log(mixadd/10 + " is the generic average of elements")
}

// Progression #5: Unique arrays
function Unique(){
     
    const wordsUnique = [
        'bread',
        'jam',
        'milk',
        'egg',
        'flour',
        'oil',
        'rice',
        'coffee powder',
        'sugar',
        'salt',
        'egg',
        'flour'
      ]
      console.log(wordsUnique)
      wordsUnique.forEach(sort)
      function sort(val,idx){
        (wordsUnique.indexOf(val)==idx)? console.log(val+" "):console.log()
      }
      console.log("Is the unique list")
}


// Progression #6: Find elements
function searchElement(){
     
    const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience']
    console.log(wordsFind)
    let item=prompt("Enter Value to search")
    let state=0
    for (var i in wordsFind){
        if (wordsFind[i]==item){
            state=1
        }
    }
    (state==1)? console.log(true+" : element in present in above list"): console.log(false+" : element in not present in above list")
}



// Progression #7: Count repetition
function howManyTimesElementRepeated(){
     
    const wordsCount = [
        'machine',
        'matter',
        'subset',
        'trouble',
        'starting',
        'matter',
        'eating',
        'matter',
        'truth',
        'disobedience',
        'matter'
      ]
    let item=prompt("Enter the word")
    let count=0
    for (var i in wordsCount){
        if(wordsCount[i]==item){
            count+=1
        }
    }
    console.log(wordsCount)
    console.log(count+" is count of the word in above list")

}


// Progression #8: Bonus
function maximumProduct(matrix){
     
    let max=0

    for (var i=0;i<10;i++){
        for (var j=0;j<7;j++){
            let sum=0
            sum+=parseInt(matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]*matrix[i][j+3])
            max= Math.max(max,sum)
        }
    }

    for (var i=0;i<7;i++){
        for (var j=0;j<10;j++){
            let sum=0
            sum+= parseInt(matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j])
            max=Math.max(max,sum)
        }
    }
    console.log(matrix)
    console.log(max+" Is the maximum product of 4 adjacent elements in the matrix")
}
const matrix = [
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
// maximumProduct(matrix)










