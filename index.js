module.exports = {
  init: function () {
    // Array

    if (!Array._last) {
      Object.defineProperty(Array.prototype, '_last', {
        get: function () {
          return this[this.length - 1];
        }
      });
    }

    if (!Array._head) {
      Object.defineProperty(Array.prototype, '_head', {
        get: function () {
          return this[0];
        }
      });
    }

    if (!Array._tail) {
      Object.defineProperty(Array.prototype, '_tail', {
        get: function () {
          return this.slice(1);
        }
      });
    }

    if (!Array._distinct) {
      Object.defineProperty(Array.prototype, '_distinct', {
        get: function () {
          return this.filter(function (v, i, a) {
            return a.indexOf(v) === i
          });
        }
      });
    }


    if (!Array._count) {
      Object.defineProperty(Array.prototype, '_count', {
        value: function (callback) {
          let c = 0;
          this.forEach(function (v) {
            if (callback(v)) c++;
          })

          return c;
        }
      });
    }

    if (!Array._take) {
      Object.defineProperty(Array.prototype, '_take', {
        value: function (n) {
          return this.slice(1, n);
        }
      });
    }

    if (!Array._drop) {
      Object.defineProperty(Array.prototype, '_drop', {
        value: function (n) {
          return this.slice(n);
        }
      });
    }

    if (Set && !Array._toSet) {
      Object.defineProperty(Array.prototype, '_toSet', {
        get: function () {
          return new Set(this);
        }
      });
    }

    // String

    if (!String._last) {
      Object.defineProperty(String.prototype, '_last', {
        get: function () {
          return this[this.length - 1];
        }
      });
    }

    if (!String._head) {
      Object.defineProperty(String.prototype, '_head', {
        get: function () {
          return this[0];
        }
      });
    }

    if (!String._tail) {
      Object.defineProperty(String.prototype, '_tail', {
        get: function () {
          return this.slice(1);
        }
      });
    }

    if (!String._take) {
      Object.defineProperty(String.prototype, '_take', {
        value: function (n) {
          return this.slice(1, n);
        }
      });
    }

    if (!String._drop) {
      Object.defineProperty(String.prototype, '_drop', {
        value: function (n) {
          return this.slice(n);
        }
      });
    }

    // Number

    Object.defineProperty(Number.prototype, '_isNaN', {
      get: function () {
        return isNaN(this);
      }
    });

    // Object

    Object.defineProperty(Object.prototype, '_forEach', {
      value: function (callback) {
        Object.entries(this).forEach(function (v) {
          callback(v[0], v[1]);
        })
      }
    });

    Object.defineProperty(Object.prototype, '_forEachValue', {
      value: function (callback) {
        Object.values(this).forEach(function (v) {
          callback(v);
        })
      }
    });

    Object.defineProperty(Object.prototype, '_map', {
      value: function (callback) {
        const O = {};
        Object.entries(this).forEach(function (v) {
          O[v[0]] = callback(v[0], v[1]);
        })
        return O;
      }
    });

    Object.defineProperty(Object.prototype, '_mapValues', {
      value: function (callback) {
        const O = {};
        Object.entries(this).forEach(function (v) {
          O[v[0]] = callback(v[1]);
        })
        return O;
      }
    });
  }
}