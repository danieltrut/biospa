const db = require("../config/db");

// Contraindications DB table class
class Procedure {
  constructor(
    proc_id,
    proc_title_et,
    proc_title_ru,
    proc_title_en,
    proc_descr_et,
    proc_descr_ru,
    proc_descr_en,
    proc_duration,
    proc_price
  ) {
    this.proc_id = proc_id;
    this.proc_title_et = proc_title_et;
    this.proc_title_ru = proc_title_ru;
    this.proc_title_en = proc_title_en;
    this.proc_descr_et = proc_descr_et;
    this.proc_descr_ru = proc_descr_ru;
    this.proc_descr_en = proc_descr_en;
    this.proc_duration = proc_duration;
    this.proc_price = proc_price;
  }


  // Procedures on Targets
  static findAllProceduresOnTargets(tarIdsString) {
    let sql = `SELECT procedures.proc_title_et, procedures.proc_descr_et, procedures.proc_duration, procedures.proc_price FROM procedures 
    INNER JOIN procedures_targets INNER JOIN targets ON procedures.proc_id=procedures_targets.proc_id
    AND procedures_targets.proc_id=targets.tar_id WHERE targets.tar_id IN (${tarIdsString}) ORDER BY procedures.proc_price; `;
    return db.execute(sql);
  }

  /** ------------------------------------------------------------------
   * ADMINS-PANEL MySQL statements for Procedures Controller methods
   */
  // Create new
  async saveNewProcedure() {
    let sql = `INSERT INTO procedures(proc_title_et,proc_title_ru,proc_title_en,proc_descr_et,proc_descr_ru,proc_descr_en,proc_duration,proc_price)
    VALUES('${this.proc_title_et}','${this.proc_title_ru}','${this.proc_title_en}','${this.proc_descr_et}','${this.proc_descr_ru}','${this.proc_descr_en}','${this.proc_duration}','${this.proc_price}')`;

    const [newProcedure, _] = await db.execute(sql);
    return newProcedure;
  }

  // Find all procedures
  static findAll() {
    let sql = "SELECT * FROM procedures;";
    return db.execute(sql);
  }

  // Find by ID
  static findById(proc_id) {
    let sql = `SELECT * FROM procedures WHERE proc_id = ${proc_id};`;
    return db.execute(sql);
  }

  static findByIdAndUpdate(proc_id) {
    let sql = `UPDATE procedures SET proc_title_et = ${this.proc_title_et}, 
    proc_title_ru = ${this.proc_title_ru}, proc_title_en = ${this.proc_title_en} WHERE proc_id = ${proc_id} ;`;
    return db.execute(sql);
  }

  static deleteById(proc_id) {
    let sql = `DELETE FROM procedures WHERE proc_id = ${proc_id};`;
    return db.execute(sql);
  }

  static findByPrice() {
    let sql = `SELECT proc_id, proc_price FROM procedures;`;
    return db.execute(sql);
  }
}

module.exports = Procedure;
