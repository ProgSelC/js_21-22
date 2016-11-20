function pow(base, exponent) {
    var result;
    if (typeof base == 'number' && typeof exponent == 'number') {
        if (exponent % 1 == 0) {
            if (exponent == 0) {
                return 1;
            } else if (exponent < 0) {
                result = base;
                for (var i = 2; i <= exponent * -1; i++) {
                    result *= base;
                }
                return 1 / result;
            } else {
                result = base;
                for (var i = 2; i <= exponent; i++) {
                    result *= base;
                }
                return result;
            }
        } else {
            return undefined;
        }
    } else {
        return NaN;
    }
}
