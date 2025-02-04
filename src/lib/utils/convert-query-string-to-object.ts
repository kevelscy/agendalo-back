export function fromQueryString(queryObj): Record<string, any> {
  const result = {};

  for (const key in queryObj) {
    if (Object.prototype.hasOwnProperty.call(queryObj, key)) {
      const keys = key.split(/[\[\]]+/).filter(Boolean); // Descompone la clave en partes, ignorando los corchetes vacíos
      let current = result;

      keys.forEach((part, index) => {
        if (index === keys.length - 1) {
          // Si es el último elemento, asigna el valor
          current[part] = isNaN(queryObj[key]) ? queryObj[key] : Number(queryObj[key]);
        } else {
          // Verificar si la siguiente parte de la clave es un número
          if (!current[part]) {
            current[part] = /^\d+$/.test(keys[index + 1]) ? [] : {};
          }
          current = current[part];
        }
      });
    }
  }

  return result;
}
