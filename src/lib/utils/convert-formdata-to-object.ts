export const convertFormdataToObject = (payload: Record<string, any>): Record<string, any> => {
  const nested: Record<string, any> = {};

  for (const key in payload) {
    const value = payload[key];
    const keys = key.split('.'); // Dividimos la clave por los puntos
    let currentLevel = nested;

    for (let i = 0; i < keys.length; i++) {
      const subKey = keys[i];

      if (i === keys.length - 1) {
        // Si estamos en la última clave, asignamos el valor
        currentLevel[subKey] = value;
      } else {
        // Si la clave no existe, la inicializamos como un objeto vacío
        if (!currentLevel[subKey]) {
          currentLevel[subKey] = {};
        }
        // Descendemos al siguiente nivel
        currentLevel = currentLevel[subKey];
      }
    }
  }

  return nested;
}
