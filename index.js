function drawTriangle(triangleSize) {
  for (let i = 1; i <= triangleSize; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

export default drawTriangle;
