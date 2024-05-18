class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const handleError = (name, age, major) => {
  const min = 18;
  const max = 25;
  const errors = [];

  if (typeof name !== 'string') {
    errors.push("Nama harus dalam bentuk string!");
  }
  if (typeof age !== 'number') {
    errors.push("Umur harus dalam bentuk angka!");
  } else if (age < min || age > max) {
    errors.push(`Umur tidak boleh kurang dari ${min} dan tidak boleh lebih dari ${max}`);
  }
  if (typeof major !== 'string') {
    errors.push("Jurusan harus dalam bentuk string!");
  } else if (major !== major.toUpperCase()) {
    errors.push("Jurusan harus huruf besar semua!");
  }

  if (errors.length > 0) {
    throw new ValidationError(errors.join(", ",", "));
  }
};

const data = (name, age, major) => {
  try {
    handleError(name, age, major);
    return { Nama: name, Umur: age, Jurusan: major };
  } catch (error) {
    if (error instanceof ValidationError) {
      return `Kesalahan pada: ${error.message}`;
    } else {
      return error.stack;
    }
  }
};

// Contoh penggunaan
console.log(data("Budi", 20, "INFORMATIKA"));  // No errors, should return the object
console.log(data(12, 17, "matematika"));      // Multiple errors
console.log(data("Lina", "20", 2));           // Multiple errors
console.log(data("Edo", 22, "sipil"));        // one error