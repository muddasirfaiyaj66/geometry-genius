// Triangle calculation 

document.getElementById('triangle-calculate-btn').addEventListener('click', function(){
    const triangleBaseValue = inputFieldValue('triangle-base-value');
    const triangleHightValue = inputFieldValue('triangle-height-value');

    const triangleArea = 0.5 * triangleBaseValue * triangleHightValue ;
    
    const triangleTotalArea = document.getElementById('triangle-area');
    triangleTotalArea.innerText = triangleArea;

    
})

// Rectangle Calculation 

document.getElementById('rectangle-calculate-btn').addEventListener('click', function(){
    const rectangleWidthValue = inputFieldValue('rectangle-width-value');
    const rectangleLengthValue = inputFieldValue('rectangle-length-value');

    const rectangleArea = rectangleWidthValue * rectangleLengthValue ;
    
    const rectangleTotalArea = document.getElementById('rectangle-area');
    rectangleTotalArea.innerText = rectangleArea;

    
})

// parallelogram area Calculation 

document.getElementById('parallelogram-calculate-btn').addEventListener('click', function(){
    const parallelogramBaseValue = inputFieldValue('parallelogram-base-value');
    const parallelogramHeightValue = inputFieldValue('parallelogram-height-value');

    const parallelogramArea = parallelogramBaseValue * parallelogramHeightValue ;
    
    const parallelogramTotalArea = document.getElementById('parallelogram-area');
    parallelogramTotalArea.innerText = parallelogramArea;

    
})

// Rhombus  area Calculation 

document.getElementById('rhombus-calculate-btn').addEventListener('click', function(){
    const rhombusD1Value = inputFieldValue('rhombus-d1-value');
    const rhombusD2Value = inputFieldValue('rhombus-d2-value');

    const rhombusArea = 0.5 * rhombusD1Value * rhombusD2Value ;
    
    const rhombusTotalArea = document.getElementById('rhombus-area');
    rhombusTotalArea.innerText = rhombusArea;

    
})
// pentagon area Calculation 

document.getElementById('pentagon-calculate-btn').addEventListener('click', function(){
    const pentagonPValue = inputFieldValue('pentagon-p-value');
    const pentagonBValue = inputFieldValue('pentagon-b-value');

    const pentagonArea = 0.5 * pentagonPValue * pentagonBValue ;
    
    const pentagonTotalArea = document.getElementById('pentagon-area');
    pentagonTotalArea.innerText = pentagonArea;

    
})
// ellipse area Calculation 

document.getElementById('ellipse-calculate-btn').addEventListener('click', function(){
    const ellipseAValue = inputFieldValue('ellipse-a-value');
    const ellipseBValue = inputFieldValue('ellipse-b-value');
    const piValue = Math.PI;
    const ellipseArea = piValue * ellipseAValue * ellipseBValue ;
    
    const ellipseTotalArea = document.getElementById('ellipse-area');
    ellipseTotalArea.innerText = ellipseArea;

    
})

