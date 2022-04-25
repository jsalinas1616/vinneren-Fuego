//Genera la distorsion random
const randomGeneration = () => {
  const randomValue = [];
  for (let i = 0; i < 3; i++) {
    randomValue.push(Math.floor(Math.random() * (4 - 0 + 1)) + 0);
  }

  return randomValue;
};

// revisa que el arreglo no tenga valores repetidos ya que de ahi
// dependera la distorison de mi mensaje
const checkDontRepite = (randomValue) => {
  let repit = 0;
  randomValue.forEach((data1) => {
    randomValue.forEach((data2) => {
      if (data1 === data2) {
        repit = repit + 1;
      }
    });
  });
  if (repit > 3) {
    return false;
  } else {
    return true;
  }
};

//Desface de cada uno de los arreglos.
const gap = (gap) => {
  const result = gap.slice();

  gap.forEach((data, index) => {
    if (data === '' && index < gap.length - 1) {
      result[index + 1] = gap[index];
      result[index] = gap[index + 1];
    }
  });

  return result;
};

// invierte desface de cada uno de los arreglos.
const invertGap = (invert) => {
  const result = invert.slice();
  invert.forEach((data, index) => {
    if (data === '' && index < invert.length - 1) {
      result[index - 1] = invert[index];
      result[index] = invert[index - 1];
    }
  });
  return result;
};

//Genera los tres mensajes dinamicamete sin repetirse a cada uno de los
//satelites con su distorsion pertinente
const messageGenerator = () => {
  let check = false;
  let randomValue = '';
  while (check === false) {
    randomValue = randomGeneration();
    check = checkDontRepite(randomValue);
  }

  const messageComplete = 'este es un mensaje secreto';
  let messageArray = messageComplete.split(' ');

  let kenobi = messageArray.slice();
  let skywalker = messageArray.slice();
  let sato = messageArray.slice();

  /*Despues de haber creado un conjunto de mensajes random, 
  se los envio a la version de cada uno de los satelites*/
  const versionKenobi = randomValue[0];
  const versionSkywalker = randomValue[1];
  const versionSato = randomValue[2];

  kenobi[randomValue[0]] = '';
  skywalker[randomValue[1]] = '';
  sato[randomValue[2]] = '';

  //creo la distorsion del mensaje
  kenobi = gap(kenobi);
  skywalker = gap(skywalker);
  sato = gap(sato);

  //envio el mensaje tanto distorsionado como desfasado
  GetMessage(kenobi, skywalker, sato);
};

//asi reciben los mensajes cada satelite
const GetMessage = (...strings) => {
  const [kenobi, skywalker, sato] = strings;

  console.log('Input');
  console.log('Kenobi', kenobi, 'skywalker', skywalker, 'sato', sato);

  // envio a revertir la distorsion del mensaje
  const kenobiOri = invertGap(kenobi);
  const skywalkerOri = invertGap(skywalker);
  const satoOri = invertGap(sato);

  //formar formar mensaje completo
  const completeMessange = kenobiOri.map((data, index) => {
    let complet = '';
    if (data === '') {
      if (skywalkerOri[index] === '') {
        complet = satoOri[index];
      } else {
        complet = skywalkerOri[index];
      }
    } else {
      complet = data;
    }
    return complet;
  });

  console.log('Output mensaje Completo', completeMessange);
};

messageGenerator();
