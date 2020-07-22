$("#currency-counter").click(function(){
    let amount = $("#currency").val();
    countNotes(amount);
});

const countNotes = (amount) => {
            if(amount){
                $('#notes').html("Number of Notes for Currency:  "+ amount);
               
                let currency= [2000, 500, 200, 100, 50, 20, 10, 5, 1];
                let currencyCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (let i = 0; i < 9; i++)  
                    { 
                        if (amount >= currency[i]) 
                        { 
                            currencyCount[i] = parseInt(amount / currency[i]); 
                            amount = amount -  currencyCount[i] *  currency[i]; 
                        } 
                    }
                     for (let k = 0; k < 9; k++)  
                            { 
                                if (currencyCount[k] != 0)  
                                { 
                                    html =`<tr><td>${currency[k]}</td><td>${currencyCount[k]}</td></tr>`;
                                    $('#result').append(html);
                                } 
                            }
                            
                    totalNotes(currencyCount);
            }
        }
const totalNotes = (currencyCount) =>{
    let sum = currencyCount.reduce(function(a, b){
        return a + b;
    }, 0);

    $('.totalsum').html("<b>Total Number of Notes:</b>"+"  "+ sum);
}