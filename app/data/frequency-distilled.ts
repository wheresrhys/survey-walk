type MonthLeafNode = {
  total: number;
  totalYears: number;
} & Record<string, number>;

export type SpeciesNode = Record<string, MonthLeafNode>;

type SpeciesMap = Record<string, SpeciesNode>;

export const monthFrequency: Record<string, number> = {
  "10": 4,
  "11": 3,
  "12": 4,
  "08": 3,
  "01": 4,
  "09": 4,
  "07": 4,
  "06": 4,
  "05": 3,
  "04": 3,
  "03": 1,
  "02": 2
}
export const distilledHistory: SpeciesMap = {
  "Canada Goose": {
    "10": {
      "total": 1,
      "totalYears": 1,
      "fields-3": 1
    },
    "11": {
      "total": 3,
      "totalYears": 3,
      "waterworks-2": 1,
      "waterworks-7": 1,
      "waterworks-4": 1
    },
    "12": {
      "total": 1,
      "totalYears": 1,
      "fields-6": 1
    },
    "08": {
      "total": 2,
      "totalYears": 2,
      "fields-4": 1,
      "fields-3": 1
    },
    "01": {
      "total": 2,
      "totalYears": 2,
      "waterworks-3": 1,
      "fields-2": 1
    },
    "09": {
      "total": 1,
      "totalYears": 1,
      "waterworks-7": 1
    },
    "05": {
      "total": 5,
      "totalYears": 3,
      "waterworks-7": 1,
      "waterworks-1": 2,
      "waterworks-4": 2
    },
    "04": {
      "total": 8,
      "totalYears": 3,
      "waterworks-1": 2,
      "fields-2": 1,
      "waterworks-2": 1,
      "waterworks-4": 2,
      "waterworks-7": 1,
      "fields-3": 1
    },
    "06": {
      "total": 2,
      "totalYears": 1,
      "fields-1": 1,
      "fields-2": 1
    },
    "03": {
      "total": 1,
      "totalYears": 1,
      "waterworks-1": 1
    },
    "02": {
      "total": 4,
      "totalYears": 2,
      "fields-4": 1,
      "waterworks-2": 1,
      "fields-3": 1,
      "waterworks-1": 1
    }
  },
  "Stock Dove": {
    "10": {
      "total": 2,
      "totalYears": 2,
      "fields-3": 2
    },
    "11": {
      "total": 1,
      "totalYears": 1,
      "fields-1": 1
    },
    "12": {
      "total": 4,
      "totalYears": 3,
      "fields-3": 3,
      "fields-4": 1
    },
    "08": {
      "total": 8,
      "totalYears": 3,
      "fields-2": 2,
      "waterworks-1": 2,
      "waterworks-2": 1,
      "waterworks-4": 1,
      "fields-3": 1,
      "waterworks-8": 1
    },
    "01": {
      "total": 10,
      "totalYears": 4,
      "fields-2": 2,
      "fields-3": 4,
      "waterworks-4": 1,
      "waterworks-7": 2,
      "fields-6": 1
    },
    "09": {
      "total": 5,
      "totalYears": 4,
      "fields-2": 1,
      "fields-3": 1,
      "waterworks-4": 2,
      "waterworks-7": 1
    },
    "07": {
      "total": 15,
      "totalYears": 4,
      "fields-3": 3,
      "fields-4": 2,
      "waterworks-6": 1,
      "fields-2": 2,
      "waterworks-2": 1,
      "waterworks-4": 3,
      "waterworks-8": 1,
      "waterworks-1": 2
    },
    "06": {
      "total": 6,
      "totalYears": 4,
      "waterworks-1": 1,
      "fields-3": 2,
      "fields-5": 1,
      "fields-2": 2
    },
    "05": {
      "total": 9,
      "totalYears": 3,
      "fields-3": 3,
      "waterworks-4": 1,
      "waterworks-7": 2,
      "fields-2": 1,
      "fields-4": 1,
      "waterworks-2": 1
    },
    "04": {
      "total": 10,
      "totalYears": 3,
      "fields-3": 3,
      "fields-4": 1,
      "waterworks-7": 1,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "fields-2": 1,
      "waterworks-1": 1,
      "waterworks-4": 1
    },
    "03": {
      "total": 1,
      "totalYears": 1,
      "fields-3": 1
    },
    "02": {
      "total": 3,
      "totalYears": 1,
      "fields-2": 1,
      "fields-3": 1,
      "fields-4": 1
    }
  },
  "Woodpigeon": {
    "10": {
      "total": 28,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 3,
      "fields-4": 1,
      "fields-6": 3,
      "waterworks-1": 3,
      "waterworks-2": 2,
      "waterworks-3": 1,
      "waterworks-4": 2,
      "waterworks-5": 2,
      "waterworks-6": 2,
      "waterworks-7": 2,
      "fields-3": 1,
      "fields-5": 1,
      "waterworks-8": 1
    },
    "11": {
      "total": 18,
      "totalYears": 3,
      "fields-3": 3,
      "fields-6": 3,
      "waterworks-1": 2,
      "waterworks-8": 1,
      "fields-1": 2,
      "fields-2": 1,
      "waterworks-3": 2,
      "waterworks-4": 1,
      "waterworks-7": 1,
      "fields-5": 1,
      "waterworks-6": 1
    },
    "12": {
      "total": 24,
      "totalYears": 4,
      "fields-1": 2,
      "fields-2": 3,
      "fields-3": 3,
      "fields-4": 2,
      "fields-6": 2,
      "waterworks-1": 2,
      "waterworks-4": 1,
      "waterworks-6": 2,
      "waterworks-7": 3,
      "waterworks-8": 2,
      "waterworks-2": 1,
      "fields-5": 1
    },
    "08": {
      "total": 35,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 2,
      "fields-4": 3,
      "fields-5": 2,
      "fields-6": 2,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "waterworks-5": 1,
      "waterworks-6": 3,
      "waterworks-7": 3,
      "fields-3": 2,
      "waterworks-8": 2
    },
    "01": {
      "total": 32,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 3,
      "fields-6": 3,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "waterworks-6": 2,
      "waterworks-8": 2,
      "fields-3": 1,
      "fields-4": 1,
      "waterworks-5": 1,
      "waterworks-7": 2,
      "fields-5": 1
    },
    "09": {
      "total": 33,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 2,
      "fields-3": 4,
      "fields-4": 1,
      "fields-5": 2,
      "fields-6": 3,
      "waterworks-1": 4,
      "waterworks-2": 3,
      "waterworks-4": 3,
      "waterworks-6": 2,
      "waterworks-5": 2,
      "waterworks-7": 2,
      "waterworks-3": 1
    },
    "07": {
      "total": 40,
      "totalYears": 4,
      "fields-1": 2,
      "fields-3": 4,
      "fields-4": 3,
      "fields-6": 3,
      "waterworks-1": 3,
      "waterworks-2": 4,
      "waterworks-3": 3,
      "waterworks-4": 4,
      "waterworks-6": 4,
      "waterworks-7": 1,
      "fields-2": 2,
      "fields-5": 3,
      "waterworks-8": 3,
      "waterworks-5": 1
    },
    "06": {
      "total": 39,
      "totalYears": 4,
      "fields-1": 3,
      "fields-2": 4,
      "fields-3": 3,
      "fields-4": 3,
      "waterworks-2": 4,
      "waterworks-3": 4,
      "waterworks-4": 3,
      "waterworks-6": 3,
      "waterworks-7": 4,
      "waterworks-8": 2,
      "fields-5": 1,
      "waterworks-1": 3,
      "fields-6": 1,
      "waterworks-5": 1
    },
    "05": {
      "total": 34,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 3,
      "fields-3": 3,
      "fields-5": 3,
      "fields-6": 3,
      "waterworks-1": 3,
      "waterworks-2": 1,
      "waterworks-3": 2,
      "waterworks-4": 3,
      "waterworks-5": 1,
      "waterworks-6": 3,
      "waterworks-8": 3,
      "fields-4": 2,
      "waterworks-7": 1
    },
    "04": {
      "total": 36,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 3,
      "fields-3": 3,
      "fields-4": 2,
      "fields-5": 3,
      "waterworks-2": 2,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "waterworks-5": 3,
      "waterworks-6": 3,
      "waterworks-7": 3,
      "fields-6": 2,
      "waterworks-1": 2,
      "waterworks-8": 1
    },
    "03": {
      "total": 12,
      "totalYears": 1,
      "fields-1": 1,
      "fields-2": 1,
      "fields-3": 1,
      "fields-4": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-6": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    },
    "02": {
      "total": 22,
      "totalYears": 2,
      "fields-2": 1,
      "fields-3": 2,
      "fields-4": 2,
      "fields-5": 2,
      "waterworks-1": 2,
      "waterworks-2": 2,
      "waterworks-3": 2,
      "waterworks-4": 2,
      "waterworks-6": 2,
      "waterworks-7": 2,
      "fields-1": 1,
      "fields-6": 1,
      "waterworks-8": 1
    }
  },
  "Swift": {
    "10": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    },
    "08": {
      "total": 3,
      "totalYears": 3,
      "fields-2": 1,
      "waterworks-8": 1,
      "waterworks-2": 1
    },
    "07": {
      "total": 8,
      "totalYears": 4,
      "fields-4": 1,
      "waterworks-1": 2,
      "fields-1": 1,
      "waterworks-6": 1,
      "waterworks-5": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    },
    "06": {
      "total": 10,
      "totalYears": 4,
      "waterworks-7": 2,
      "fields-2": 2,
      "fields-3": 1,
      "waterworks-1": 2,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-8": 1
    },
    "05": {
      "total": 6,
      "totalYears": 3,
      "waterworks-4": 3,
      "waterworks-1": 2,
      "waterworks-7": 1
    }
  },
  "Moorhen": {
    "10": {
      "total": 15,
      "totalYears": 4,
      "fields-3": 3,
      "fields-4": 4,
      "waterworks-4": 4,
      "waterworks-7": 2,
      "waterworks-3": 2
    },
    "11": {
      "total": 10,
      "totalYears": 3,
      "fields-3": 2,
      "fields-4": 3,
      "waterworks-4": 3,
      "waterworks-3": 1,
      "waterworks-7": 1
    },
    "12": {
      "total": 12,
      "totalYears": 4,
      "fields-1": 1,
      "fields-3": 2,
      "fields-4": 4,
      "waterworks-4": 4,
      "waterworks-1": 1
    },
    "08": {
      "total": 10,
      "totalYears": 3,
      "fields-1": 1,
      "fields-3": 1,
      "fields-4": 3,
      "waterworks-4": 3,
      "waterworks-7": 2
    },
    "01": {
      "total": 15,
      "totalYears": 4,
      "fields-3": 3,
      "fields-4": 4,
      "waterworks-1": 1,
      "waterworks-4": 4,
      "waterworks-8": 1,
      "waterworks-3": 1,
      "waterworks-5": 1
    },
    "09": {
      "total": 17,
      "totalYears": 4,
      "fields-3": 3,
      "fields-4": 4,
      "waterworks-4": 4,
      "waterworks-7": 3,
      "waterworks-3": 2,
      "waterworks-2": 1
    },
    "07": {
      "total": 14,
      "totalYears": 4,
      "fields-3": 2,
      "fields-4": 4,
      "waterworks-4": 4,
      "waterworks-7": 2,
      "fields-1": 1,
      "waterworks-1": 1
    },
    "06": {
      "total": 14,
      "totalYears": 4,
      "fields-1": 1,
      "fields-4": 4,
      "waterworks-1": 2,
      "waterworks-3": 2,
      "waterworks-4": 4,
      "waterworks-7": 1
    },
    "05": {
      "total": 11,
      "totalYears": 3,
      "fields-4": 3,
      "waterworks-1": 2,
      "waterworks-4": 3,
      "waterworks-7": 1,
      "waterworks-2": 1,
      "waterworks-3": 1
    },
    "04": {
      "total": 13,
      "totalYears": 3,
      "fields-3": 3,
      "fields-4": 3,
      "waterworks-1": 2,
      "waterworks-4": 3,
      "waterworks-7": 1,
      "waterworks-2": 1
    },
    "03": {
      "total": 3,
      "totalYears": 1,
      "fields-4": 1,
      "waterworks-2": 1,
      "waterworks-4": 1
    },
    "02": {
      "total": 8,
      "totalYears": 2,
      "fields-3": 2,
      "fields-4": 2,
      "waterworks-1": 2,
      "waterworks-4": 2
    }
  },
  "Coot": {
    "10": {
      "total": 6,
      "totalYears": 4,
      "fields-4": 2,
      "waterworks-4": 4
    },
    "11": {
      "total": 5,
      "totalYears": 3,
      "fields-4": 2,
      "waterworks-4": 3
    },
    "12": {
      "total": 9,
      "totalYears": 4,
      "fields-3": 1,
      "fields-4": 3,
      "waterworks-4": 4,
      "waterworks-7": 1
    },
    "08": {
      "total": 5,
      "totalYears": 3,
      "fields-4": 2,
      "waterworks-4": 3
    },
    "01": {
      "total": 9,
      "totalYears": 4,
      "fields-3": 2,
      "fields-4": 2,
      "waterworks-4": 4,
      "waterworks-5": 1
    },
    "09": {
      "total": 8,
      "totalYears": 4,
      "fields-4": 3,
      "waterworks-4": 4,
      "waterworks-7": 1
    },
    "07": {
      "total": 9,
      "totalYears": 4,
      "fields-4": 3,
      "waterworks-4": 4,
      "waterworks-5": 1,
      "waterworks-7": 1
    },
    "06": {
      "total": 10,
      "totalYears": 4,
      "fields-4": 4,
      "waterworks-4": 4,
      "waterworks-7": 2
    },
    "05": {
      "total": 9,
      "totalYears": 3,
      "fields-4": 3,
      "waterworks-4": 3,
      "waterworks-7": 2,
      "fields-3": 1
    },
    "04": {
      "total": 8,
      "totalYears": 3,
      "fields-3": 2,
      "fields-4": 3,
      "waterworks-4": 3
    },
    "03": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "02": {
      "total": 3,
      "totalYears": 2,
      "fields-4": 1,
      "waterworks-4": 2
    }
  },
  "Black-headed Gull": {
    "10": {
      "total": 11,
      "totalYears": 4,
      "fields-2": 2,
      "fields-4": 2,
      "fields-5": 1,
      "waterworks-4": 2,
      "waterworks-1": 1,
      "fields-1": 1,
      "fields-3": 1,
      "waterworks-7": 1
    },
    "11": {
      "total": 15,
      "totalYears": 3,
      "fields-2": 2,
      "waterworks-3": 2,
      "waterworks-7": 2,
      "waterworks-8": 2,
      "fields-1": 1,
      "fields-3": 2,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-4": 1,
      "waterworks-5": 1
    },
    "12": {
      "total": 21,
      "totalYears": 4,
      "fields-2": 3,
      "fields-5": 2,
      "waterworks-3": 2,
      "waterworks-4": 2,
      "waterworks-7": 4,
      "fields-4": 3,
      "fields-1": 1,
      "fields-3": 1,
      "fields-6": 1,
      "waterworks-5": 1,
      "waterworks-8": 1
    },
    "08": {
      "total": 5,
      "totalYears": 2,
      "fields-4": 1,
      "waterworks-1": 2,
      "waterworks-4": 1,
      "fields-5": 1
    },
    "01": {
      "total": 21,
      "totalYears": 4,
      "waterworks-1": 2,
      "fields-1": 2,
      "fields-3": 3,
      "fields-4": 3,
      "fields-6": 2,
      "waterworks-3": 2,
      "waterworks-4": 2,
      "fields-2": 1,
      "waterworks-2": 1,
      "fields-5": 1,
      "waterworks-6": 1,
      "waterworks-7": 1
    },
    "09": {
      "total": 6,
      "totalYears": 4,
      "fields-4": 3,
      "fields-3": 1,
      "waterworks-4": 1,
      "fields-1": 1
    },
    "07": {
      "total": 7,
      "totalYears": 4,
      "waterworks-4": 2,
      "fields-1": 1,
      "fields-4": 2,
      "waterworks-1": 1,
      "waterworks-8": 1
    },
    "05": {
      "total": 2,
      "totalYears": 2,
      "waterworks-1": 2
    },
    "06": {
      "total": 5,
      "totalYears": 3,
      "waterworks-1": 2,
      "fields-3": 1,
      "waterworks-6": 1,
      "waterworks-4": 1
    },
    "04": {
      "total": 1,
      "totalYears": 1,
      "waterworks-7": 1
    },
    "03": {
      "total": 4,
      "totalYears": 1,
      "fields-2": 1,
      "fields-3": 1,
      "waterworks-1": 1,
      "waterworks-3": 1
    },
    "02": {
      "total": 15,
      "totalYears": 2,
      "fields-2": 2,
      "fields-4": 1,
      "fields-6": 2,
      "waterworks-1": 2,
      "waterworks-7": 1,
      "waterworks-8": 1,
      "fields-1": 1,
      "fields-3": 1,
      "fields-5": 1,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-4": 1
    }
  },
  "Lesser Black-Backed Gull": {
    "10": {
      "total": 13,
      "totalYears": 4,
      "fields-4": 3,
      "waterworks-1": 2,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-7": 1,
      "fields-1": 1,
      "fields-5": 1,
      "fields-3": 1,
      "fields-6": 1,
      "waterworks-8": 1
    },
    "11": {
      "total": 9,
      "totalYears": 3,
      "fields-4": 2,
      "waterworks-3": 1,
      "fields-1": 1,
      "fields-3": 1,
      "fields-5": 1,
      "waterworks-1": 1,
      "waterworks-8": 1,
      "fields-2": 1
    },
    "12": {
      "total": 13,
      "totalYears": 4,
      "fields-1": 3,
      "fields-2": 1,
      "fields-4": 3,
      "fields-5": 1,
      "waterworks-1": 1,
      "fields-6": 1,
      "waterworks-2": 1,
      "waterworks-4": 1,
      "waterworks-7": 1
    },
    "08": {
      "total": 19,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 3,
      "fields-3": 3,
      "fields-4": 3,
      "waterworks-1": 3,
      "waterworks-2": 1,
      "waterworks-4": 1,
      "waterworks-7": 1,
      "waterworks-5": 1
    },
    "01": {
      "total": 13,
      "totalYears": 3,
      "waterworks-7": 1,
      "waterworks-8": 2,
      "fields-3": 1,
      "fields-4": 2,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-2": 1,
      "waterworks-6": 1
    },
    "09": {
      "total": 16,
      "totalYears": 4,
      "fields-2": 1,
      "fields-3": 3,
      "fields-4": 3,
      "waterworks-7": 1,
      "waterworks-8": 1,
      "fields-1": 3,
      "waterworks-4": 2,
      "waterworks-2": 1,
      "waterworks-6": 1
    },
    "07": {
      "total": 14,
      "totalYears": 4,
      "fields-3": 1,
      "fields-4": 4,
      "waterworks-3": 1,
      "waterworks-4": 2,
      "waterworks-8": 3,
      "fields-2": 2,
      "fields-1": 1
    },
    "06": {
      "total": 21,
      "totalYears": 4,
      "fields-2": 3,
      "fields-3": 3,
      "fields-6": 1,
      "waterworks-5": 3,
      "fields-4": 3,
      "waterworks-7": 2,
      "fields-1": 2,
      "waterworks-1": 1,
      "waterworks-3": 1,
      "waterworks-6": 1,
      "waterworks-8": 1
    },
    "05": {
      "total": 16,
      "totalYears": 3,
      "fields-1": 3,
      "waterworks-2": 1,
      "waterworks-4": 2,
      "waterworks-8": 1,
      "fields-3": 2,
      "fields-4": 2,
      "waterworks-1": 1,
      "waterworks-7": 2,
      "fields-2": 1,
      "waterworks-3": 1
    },
    "04": {
      "total": 13,
      "totalYears": 3,
      "fields-1": 2,
      "fields-4": 2,
      "fields-6": 1,
      "fields-3": 2,
      "waterworks-1": 1,
      "waterworks-6": 1,
      "waterworks-7": 1,
      "fields-2": 1,
      "fields-5": 1,
      "waterworks-4": 1
    },
    "03": {
      "total": 6,
      "totalYears": 1,
      "fields-1": 1,
      "fields-2": 1,
      "fields-4": 1,
      "waterworks-2": 1,
      "waterworks-5": 1,
      "waterworks-6": 1
    },
    "02": {
      "total": 11,
      "totalYears": 2,
      "fields-1": 1,
      "fields-3": 1,
      "fields-4": 1,
      "waterworks-2": 1,
      "waterworks-8": 1,
      "fields-2": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-5": 1
    }
  },
  "Cormorant": {
    "10": {
      "total": 5,
      "totalYears": 4,
      "fields-2": 2,
      "fields-3": 1,
      "waterworks-4": 2
    },
    "11": {
      "total": 5,
      "totalYears": 3,
      "fields-3": 2,
      "fields-4": 1,
      "fields-6": 1,
      "fields-1": 1
    },
    "12": {
      "total": 6,
      "totalYears": 4,
      "fields-4": 2,
      "waterworks-2": 1,
      "waterworks-4": 1,
      "waterworks-8": 2
    },
    "08": {
      "total": 7,
      "totalYears": 3,
      "fields-3": 2,
      "fields-4": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-4": 1,
      "waterworks-7": 1
    },
    "01": {
      "total": 9,
      "totalYears": 4,
      "fields-4": 3,
      "fields-2": 2,
      "fields-3": 1,
      "waterworks-1": 1,
      "waterworks-4": 1,
      "waterworks-5": 1
    },
    "09": {
      "total": 6,
      "totalYears": 3,
      "fields-4": 2,
      "waterworks-8": 1,
      "fields-3": 1,
      "waterworks-2": 1,
      "fields-6": 1
    },
    "07": {
      "total": 10,
      "totalYears": 4,
      "fields-4": 2,
      "waterworks-8": 1,
      "fields-2": 2,
      "waterworks-1": 2,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "fields-3": 1
    },
    "06": {
      "total": 12,
      "totalYears": 4,
      "fields-2": 2,
      "fields-3": 1,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-4": 1,
      "waterworks-8": 2,
      "waterworks-1": 1,
      "waterworks-5": 1,
      "waterworks-7": 1,
      "fields-4": 1
    },
    "05": {
      "total": 13,
      "totalYears": 3,
      "fields-6": 2,
      "waterworks-8": 2,
      "fields-2": 1,
      "fields-3": 2,
      "fields-4": 2,
      "waterworks-1": 2,
      "waterworks-4": 1,
      "waterworks-7": 1
    },
    "04": {
      "total": 11,
      "totalYears": 3,
      "fields-4": 2,
      "waterworks-1": 1,
      "waterworks-3": 1,
      "waterworks-4": 2,
      "fields-2": 1,
      "waterworks-2": 1,
      "fields-3": 1,
      "fields-5": 1,
      "fields-6": 1
    },
    "03": {
      "total": 6,
      "totalYears": 1,
      "fields-3": 1,
      "fields-4": 1,
      "fields-5": 1,
      "waterworks-1": 1,
      "waterworks-3": 1,
      "waterworks-8": 1
    },
    "02": {
      "total": 9,
      "totalYears": 2,
      "fields-2": 2,
      "fields-3": 1,
      "fields-1": 1,
      "waterworks-1": 1,
      "waterworks-4": 1,
      "waterworks-5": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    }
  },
  "Great Spotted Woodpecker": {
    "10": {
      "total": 7,
      "totalYears": 4,
      "waterworks-1": 3,
      "fields-1": 1,
      "waterworks-8": 1,
      "fields-3": 1,
      "waterworks-2": 1
    },
    "11": {
      "total": 7,
      "totalYears": 3,
      "fields-4": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-5": 1,
      "fields-3": 1,
      "waterworks-8": 1,
      "waterworks-4": 1
    },
    "12": {
      "total": 10,
      "totalYears": 4,
      "fields-3": 2,
      "waterworks-2": 3,
      "waterworks-4": 2,
      "fields-1": 1,
      "fields-4": 1,
      "waterworks-3": 1
    },
    "08": {
      "total": 8,
      "totalYears": 3,
      "fields-3": 1,
      "fields-6": 1,
      "waterworks-1": 3,
      "waterworks-4": 1,
      "fields-4": 1,
      "waterworks-2": 1
    },
    "01": {
      "total": 7,
      "totalYears": 4,
      "waterworks-4": 1,
      "fields-6": 1,
      "waterworks-2": 2,
      "fields-4": 1,
      "waterworks-1": 1,
      "fields-3": 1
    },
    "09": {
      "total": 6,
      "totalYears": 3,
      "waterworks-1": 1,
      "waterworks-4": 2,
      "waterworks-2": 2,
      "fields-1": 1
    },
    "07": {
      "total": 10,
      "totalYears": 4,
      "fields-1": 2,
      "fields-2": 2,
      "waterworks-2": 1,
      "waterworks-4": 2,
      "fields-3": 1,
      "waterworks-1": 1,
      "waterworks-3": 1
    },
    "06": {
      "total": 7,
      "totalYears": 4,
      "waterworks-3": 1,
      "waterworks-7": 1,
      "waterworks-5": 1,
      "fields-1": 2,
      "fields-2": 1,
      "waterworks-1": 1
    },
    "05": {
      "total": 6,
      "totalYears": 3,
      "fields-3": 2,
      "waterworks-3": 1,
      "waterworks-7": 1,
      "waterworks-6": 1,
      "fields-1": 1
    },
    "04": {
      "total": 4,
      "totalYears": 3,
      "fields-3": 1,
      "waterworks-2": 1,
      "waterworks-8": 1,
      "fields-1": 1
    },
    "03": {
      "total": 2,
      "totalYears": 1,
      "fields-4": 1,
      "waterworks-2": 1
    },
    "02": {
      "total": 3,
      "totalYears": 2,
      "fields-2": 1,
      "waterworks-2": 1,
      "fields-3": 1
    }
  },
  "Ring-necked Parakeet": {
    "10": {
      "total": 35,
      "totalYears": 4,
      "fields-1": 4,
      "fields-3": 4,
      "fields-4": 4,
      "fields-5": 3,
      "waterworks-1": 4,
      "waterworks-2": 2,
      "waterworks-3": 4,
      "waterworks-4": 1,
      "waterworks-5": 1,
      "fields-2": 3,
      "waterworks-7": 3,
      "waterworks-8": 1,
      "fields-6": 1
    },
    "11": {
      "total": 22,
      "totalYears": 3,
      "fields-2": 3,
      "fields-3": 3,
      "fields-4": 2,
      "fields-5": 2,
      "fields-6": 2,
      "waterworks-1": 3,
      "waterworks-2": 2,
      "waterworks-4": 1,
      "fields-1": 2,
      "waterworks-7": 1,
      "waterworks-8": 1
    },
    "12": {
      "total": 30,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 4,
      "fields-3": 4,
      "fields-4": 3,
      "fields-5": 2,
      "waterworks-1": 3,
      "waterworks-2": 2,
      "waterworks-4": 2,
      "waterworks-5": 1,
      "waterworks-8": 3,
      "waterworks-3": 1,
      "fields-6": 1
    },
    "08": {
      "total": 20,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 3,
      "fields-3": 3,
      "fields-4": 2,
      "waterworks-1": 3,
      "fields-6": 1,
      "fields-5": 1,
      "waterworks-2": 1,
      "waterworks-4": 1,
      "waterworks-5": 1,
      "waterworks-6": 1
    },
    "01": {
      "total": 29,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 4,
      "fields-3": 4,
      "fields-5": 3,
      "waterworks-1": 3,
      "waterworks-2": 2,
      "waterworks-3": 4,
      "fields-4": 3,
      "waterworks-4": 1,
      "waterworks-5": 1
    },
    "09": {
      "total": 27,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 4,
      "fields-3": 4,
      "fields-4": 2,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-1": 4,
      "waterworks-4": 2,
      "waterworks-2": 2,
      "waterworks-3": 1,
      "waterworks-6": 1,
      "waterworks-7": 1
    },
    "07": {
      "total": 27,
      "totalYears": 4,
      "fields-1": 3,
      "fields-2": 4,
      "fields-3": 3,
      "fields-4": 1,
      "fields-5": 3,
      "fields-6": 2,
      "waterworks-1": 4,
      "waterworks-2": 3,
      "waterworks-8": 1,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-5": 1
    },
    "06": {
      "total": 21,
      "totalYears": 4,
      "fields-2": 3,
      "fields-3": 4,
      "fields-4": 3,
      "fields-6": 1,
      "waterworks-1": 4,
      "fields-1": 3,
      "fields-5": 1,
      "waterworks-3": 1,
      "waterworks-4": 1
    },
    "05": {
      "total": 26,
      "totalYears": 3,
      "fields-1": 3,
      "fields-3": 3,
      "fields-5": 2,
      "fields-6": 2,
      "waterworks-2": 3,
      "waterworks-3": 1,
      "waterworks-4": 3,
      "waterworks-5": 1,
      "waterworks-7": 2,
      "fields-2": 2,
      "fields-4": 1,
      "waterworks-1": 2,
      "waterworks-8": 1
    },
    "04": {
      "total": 21,
      "totalYears": 3,
      "fields-1": 3,
      "fields-4": 2,
      "waterworks-1": 2,
      "waterworks-2": 2,
      "waterworks-4": 1,
      "fields-2": 2,
      "fields-5": 2,
      "fields-6": 2,
      "waterworks-3": 2,
      "waterworks-7": 1,
      "waterworks-8": 1,
      "fields-3": 1
    },
    "03": {
      "total": 8,
      "totalYears": 1,
      "fields-1": 1,
      "fields-2": 1,
      "fields-3": 1,
      "fields-4": 1,
      "fields-5": 1,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-7": 1
    },
    "02": {
      "total": 15,
      "totalYears": 2,
      "fields-1": 2,
      "fields-2": 2,
      "fields-3": 2,
      "fields-4": 2,
      "fields-5": 1,
      "waterworks-1": 2,
      "waterworks-8": 1,
      "fields-6": 1,
      "waterworks-2": 1,
      "waterworks-4": 1
    }
  },
  "Jay": {
    "10": {
      "total": 5,
      "totalYears": 3,
      "waterworks-1": 1,
      "waterworks-4": 1,
      "waterworks-8": 2,
      "fields-3": 1
    },
    "11": {
      "total": 4,
      "totalYears": 3,
      "waterworks-8": 2,
      "fields-6": 1,
      "waterworks-3": 1
    },
    "12": {
      "total": 4,
      "totalYears": 4,
      "fields-1": 1,
      "fields-3": 1,
      "waterworks-1": 1,
      "waterworks-2": 1
    },
    "08": {
      "total": 9,
      "totalYears": 3,
      "fields-6": 1,
      "waterworks-2": 2,
      "waterworks-4": 2,
      "waterworks-6": 1,
      "fields-2": 1,
      "fields-3": 1,
      "waterworks-1": 1
    },
    "01": {
      "total": 4,
      "totalYears": 3,
      "waterworks-2": 1,
      "fields-3": 1,
      "waterworks-4": 1,
      "waterworks-7": 1
    },
    "09": {
      "total": 6,
      "totalYears": 4,
      "waterworks-1": 1,
      "waterworks-4": 1,
      "fields-2": 1,
      "waterworks-8": 1,
      "fields-1": 1,
      "waterworks-3": 1
    },
    "07": {
      "total": 7,
      "totalYears": 4,
      "fields-3": 2,
      "waterworks-4": 1,
      "waterworks-6": 2,
      "waterworks-2": 2
    },
    "06": {
      "total": 3,
      "totalYears": 3,
      "waterworks-2": 2,
      "waterworks-3": 1
    },
    "05": {
      "total": 2,
      "totalYears": 1,
      "waterworks-4": 1,
      "waterworks-6": 1
    },
    "04": {
      "total": 2,
      "totalYears": 2,
      "waterworks-2": 2
    },
    "02": {
      "total": 1,
      "totalYears": 1,
      "fields-2": 1
    }
  },
  "Magpie": {
    "10": {
      "total": 29,
      "totalYears": 4,
      "fields-4": 1,
      "waterworks-1": 4,
      "waterworks-3": 3,
      "waterworks-4": 4,
      "waterworks-7": 2,
      "waterworks-8": 3,
      "fields-1": 2,
      "fields-2": 2,
      "fields-3": 2,
      "waterworks-2": 3,
      "waterworks-5": 1,
      "fields-5": 1,
      "fields-6": 1
    },
    "11": {
      "total": 23,
      "totalYears": 3,
      "fields-1": 2,
      "fields-2": 2,
      "fields-5": 3,
      "fields-6": 2,
      "waterworks-1": 3,
      "fields-3": 1,
      "waterworks-2": 2,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-5": 2,
      "waterworks-6": 1,
      "waterworks-7": 1,
      "waterworks-8": 2
    },
    "12": {
      "total": 36,
      "totalYears": 4,
      "fields-1": 3,
      "fields-3": 3,
      "fields-5": 4,
      "fields-6": 4,
      "waterworks-2": 3,
      "waterworks-3": 4,
      "waterworks-4": 3,
      "waterworks-7": 4,
      "fields-4": 1,
      "waterworks-5": 1,
      "fields-2": 2,
      "waterworks-1": 2,
      "waterworks-8": 2
    },
    "08": {
      "total": 28,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 3,
      "fields-3": 1,
      "fields-4": 1,
      "fields-6": 3,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 3,
      "waterworks-4": 2,
      "waterworks-6": 1,
      "waterworks-7": 3,
      "waterworks-8": 1,
      "waterworks-5": 1
    },
    "01": {
      "total": 37,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 3,
      "fields-3": 1,
      "fields-5": 2,
      "waterworks-1": 4,
      "waterworks-2": 4,
      "waterworks-3": 3,
      "waterworks-5": 1,
      "waterworks-6": 2,
      "waterworks-7": 4,
      "waterworks-8": 4,
      "fields-6": 2,
      "waterworks-4": 2,
      "fields-4": 1
    },
    "09": {
      "total": 37,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 4,
      "fields-4": 2,
      "fields-6": 4,
      "waterworks-1": 4,
      "waterworks-2": 3,
      "waterworks-3": 3,
      "waterworks-4": 4,
      "fields-3": 2,
      "fields-5": 2,
      "waterworks-8": 3,
      "waterworks-7": 2
    },
    "07": {
      "total": 32,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 2,
      "fields-3": 4,
      "fields-4": 2,
      "fields-6": 4,
      "waterworks-1": 4,
      "waterworks-3": 3,
      "waterworks-4": 1,
      "waterworks-7": 3,
      "fields-5": 1,
      "waterworks-2": 3,
      "waterworks-8": 1
    },
    "06": {
      "total": 29,
      "totalYears": 4,
      "fields-1": 2,
      "fields-3": 2,
      "waterworks-1": 4,
      "waterworks-2": 3,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "fields-5": 2,
      "waterworks-6": 1,
      "waterworks-7": 2,
      "fields-2": 2,
      "fields-6": 1,
      "waterworks-5": 1,
      "waterworks-8": 2,
      "fields-4": 1
    },
    "05": {
      "total": 17,
      "totalYears": 3,
      "fields-1": 2,
      "fields-3": 2,
      "fields-6": 2,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 1,
      "waterworks-4": 2,
      "waterworks-8": 1,
      "waterworks-6": 1
    },
    "04": {
      "total": 25,
      "totalYears": 3,
      "fields-1": 3,
      "fields-3": 2,
      "fields-6": 2,
      "waterworks-1": 2,
      "waterworks-2": 2,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "waterworks-6": 1,
      "waterworks-8": 1,
      "fields-2": 2,
      "waterworks-7": 1,
      "fields-4": 1,
      "fields-5": 1,
      "waterworks-5": 1
    },
    "03": {
      "total": 10,
      "totalYears": 1,
      "fields-1": 1,
      "fields-2": 1,
      "fields-4": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    },
    "02": {
      "total": 22,
      "totalYears": 2,
      "fields-1": 1,
      "fields-2": 1,
      "fields-3": 2,
      "fields-5": 2,
      "fields-6": 2,
      "waterworks-1": 2,
      "waterworks-2": 2,
      "waterworks-3": 1,
      "waterworks-4": 2,
      "waterworks-5": 1,
      "waterworks-6": 2,
      "waterworks-7": 2,
      "waterworks-8": 1,
      "fields-4": 1
    }
  },
  "Carrion Crow": {
    "10": {
      "total": 34,
      "totalYears": 4,
      "fields-1": 3,
      "fields-2": 4,
      "fields-3": 4,
      "fields-4": 4,
      "fields-5": 2,
      "waterworks-1": 4,
      "waterworks-3": 2,
      "waterworks-8": 3,
      "waterworks-2": 3,
      "waterworks-7": 3,
      "waterworks-4": 2
    },
    "11": {
      "total": 24,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 1,
      "fields-3": 3,
      "fields-4": 1,
      "waterworks-1": 3,
      "waterworks-2": 2,
      "waterworks-5": 1,
      "waterworks-7": 2,
      "waterworks-8": 2,
      "waterworks-3": 2,
      "waterworks-4": 2,
      "fields-6": 1,
      "waterworks-6": 1
    },
    "12": {
      "total": 40,
      "totalYears": 4,
      "fields-1": 3,
      "fields-2": 4,
      "fields-3": 4,
      "fields-4": 4,
      "fields-5": 2,
      "fields-6": 3,
      "waterworks-1": 4,
      "waterworks-2": 4,
      "waterworks-5": 3,
      "waterworks-7": 2,
      "waterworks-8": 3,
      "waterworks-3": 2,
      "waterworks-4": 2
    },
    "08": {
      "total": 21,
      "totalYears": 3,
      "fields-2": 2,
      "fields-3": 3,
      "fields-6": 1,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 1,
      "waterworks-4": 2,
      "waterworks-7": 1,
      "fields-1": 1,
      "fields-4": 2,
      "waterworks-8": 1,
      "waterworks-6": 1
    },
    "01": {
      "total": 45,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 4,
      "fields-3": 4,
      "fields-4": 2,
      "fields-5": 3,
      "fields-6": 3,
      "waterworks-1": 4,
      "waterworks-2": 4,
      "waterworks-3": 4,
      "waterworks-4": 4,
      "waterworks-7": 4,
      "waterworks-8": 1,
      "waterworks-5": 1,
      "waterworks-6": 3
    },
    "09": {
      "total": 29,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 4,
      "fields-3": 4,
      "fields-4": 2,
      "waterworks-1": 4,
      "waterworks-3": 2,
      "waterworks-4": 3,
      "waterworks-2": 3,
      "fields-5": 1,
      "fields-6": 2
    },
    "07": {
      "total": 23,
      "totalYears": 4,
      "fields-3": 4,
      "fields-4": 3,
      "fields-6": 2,
      "waterworks-2": 4,
      "waterworks-4": 3,
      "waterworks-6": 1,
      "waterworks-7": 1,
      "fields-1": 1,
      "fields-2": 1,
      "waterworks-5": 1,
      "waterworks-1": 2
    },
    "06": {
      "total": 28,
      "totalYears": 4,
      "fields-1": 2,
      "fields-2": 3,
      "fields-3": 4,
      "fields-4": 2,
      "fields-6": 1,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "fields-5": 1,
      "waterworks-4": 2,
      "waterworks-7": 2,
      "waterworks-3": 2,
      "waterworks-6": 1,
      "waterworks-8": 2
    },
    "05": {
      "total": 23,
      "totalYears": 3,
      "fields-2": 3,
      "fields-3": 3,
      "waterworks-1": 3,
      "waterworks-3": 1,
      "waterworks-4": 3,
      "waterworks-6": 1,
      "waterworks-7": 2,
      "fields-1": 2,
      "fields-4": 1,
      "fields-6": 1,
      "waterworks-2": 2,
      "waterworks-8": 1
    },
    "04": {
      "total": 30,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 3,
      "fields-3": 3,
      "fields-6": 3,
      "waterworks-1": 3,
      "waterworks-2": 2,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "waterworks-6": 2,
      "waterworks-7": 2,
      "fields-4": 2,
      "waterworks-8": 1
    },
    "03": {
      "total": 8,
      "totalYears": 1,
      "fields-1": 1,
      "fields-2": 1,
      "fields-3": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-4": 1,
      "waterworks-6": 1
    },
    "02": {
      "total": 22,
      "totalYears": 2,
      "fields-2": 2,
      "fields-3": 2,
      "fields-4": 2,
      "fields-5": 2,
      "waterworks-1": 2,
      "waterworks-3": 2,
      "waterworks-4": 2,
      "waterworks-6": 1,
      "waterworks-7": 2,
      "waterworks-8": 2,
      "fields-1": 1,
      "fields-6": 1,
      "waterworks-2": 1
    }
  },
  "Blue Tit": {
    "10": {
      "total": 33,
      "totalYears": 4,
      "fields-1": 2,
      "fields-3": 4,
      "fields-5": 1,
      "waterworks-1": 4,
      "waterworks-4": 2,
      "waterworks-5": 2,
      "waterworks-6": 1,
      "waterworks-7": 3,
      "waterworks-8": 3,
      "fields-2": 3,
      "fields-4": 2,
      "fields-6": 1,
      "waterworks-2": 3,
      "waterworks-3": 2
    },
    "11": {
      "total": 26,
      "totalYears": 3,
      "fields-3": 3,
      "fields-5": 3,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-5": 2,
      "waterworks-6": 3,
      "waterworks-7": 3,
      "fields-1": 1,
      "fields-2": 1,
      "fields-4": 2,
      "waterworks-4": 1,
      "waterworks-8": 1
    },
    "12": {
      "total": 32,
      "totalYears": 4,
      "fields-1": 3,
      "fields-3": 3,
      "fields-4": 4,
      "fields-5": 3,
      "fields-6": 3,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 2,
      "waterworks-4": 2,
      "waterworks-5": 1,
      "waterworks-7": 2,
      "waterworks-8": 1,
      "waterworks-6": 1,
      "fields-2": 1
    },
    "08": {
      "total": 27,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 1,
      "fields-3": 3,
      "fields-6": 1,
      "waterworks-1": 2,
      "waterworks-2": 3,
      "waterworks-4": 3,
      "waterworks-5": 1,
      "waterworks-6": 2,
      "waterworks-7": 2,
      "waterworks-8": 2,
      "fields-4": 1,
      "fields-5": 2,
      "waterworks-3": 1
    },
    "01": {
      "total": 39,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 3,
      "fields-3": 4,
      "fields-4": 2,
      "fields-5": 4,
      "fields-6": 2,
      "waterworks-1": 3,
      "waterworks-2": 4,
      "waterworks-3": 3,
      "waterworks-4": 4,
      "waterworks-5": 1,
      "waterworks-7": 3,
      "waterworks-8": 1,
      "waterworks-6": 1
    },
    "09": {
      "total": 33,
      "totalYears": 4,
      "fields-1": 3,
      "fields-2": 2,
      "fields-3": 3,
      "fields-5": 3,
      "fields-6": 2,
      "waterworks-2": 4,
      "waterworks-4": 4,
      "waterworks-5": 1,
      "waterworks-1": 3,
      "waterworks-3": 2,
      "fields-4": 2,
      "waterworks-6": 1,
      "waterworks-7": 2,
      "waterworks-8": 1
    },
    "07": {
      "total": 36,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 3,
      "fields-3": 3,
      "fields-4": 3,
      "fields-6": 3,
      "waterworks-1": 2,
      "waterworks-2": 1,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "waterworks-5": 3,
      "waterworks-6": 2,
      "fields-5": 1,
      "waterworks-7": 2,
      "waterworks-8": 3
    },
    "06": {
      "total": 33,
      "totalYears": 4,
      "fields-1": 4,
      "fields-3": 4,
      "fields-5": 2,
      "waterworks-2": 3,
      "waterworks-3": 2,
      "waterworks-4": 4,
      "waterworks-5": 1,
      "waterworks-6": 2,
      "waterworks-7": 3,
      "fields-4": 3,
      "waterworks-1": 2,
      "fields-2": 2,
      "fields-6": 1
    },
    "05": {
      "total": 25,
      "totalYears": 3,
      "fields-3": 3,
      "waterworks-1": 3,
      "waterworks-2": 2,
      "waterworks-3": 3,
      "waterworks-7": 3,
      "waterworks-8": 2,
      "fields-1": 2,
      "fields-4": 2,
      "fields-5": 2,
      "waterworks-5": 1,
      "waterworks-6": 2
    },
    "04": {
      "total": 20,
      "totalYears": 3,
      "fields-1": 1,
      "fields-3": 3,
      "waterworks-1": 2,
      "waterworks-2": 3,
      "waterworks-4": 3,
      "waterworks-7": 2,
      "fields-5": 1,
      "waterworks-3": 2,
      "waterworks-6": 2,
      "waterworks-8": 1
    },
    "03": {
      "total": 9,
      "totalYears": 1,
      "fields-1": 1,
      "fields-2": 1,
      "fields-3": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    },
    "02": {
      "total": 17,
      "totalYears": 2,
      "fields-3": 2,
      "fields-5": 2,
      "waterworks-1": 2,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-4": 2,
      "waterworks-5": 2,
      "waterworks-7": 1,
      "waterworks-8": 2,
      "fields-1": 1,
      "fields-4": 1
    }
  },
  "Great Tit": {
    "10": {
      "total": 39,
      "totalYears": 4,
      "fields-3": 4,
      "fields-4": 3,
      "fields-5": 3,
      "waterworks-2": 3,
      "waterworks-3": 4,
      "waterworks-4": 3,
      "waterworks-6": 1,
      "waterworks-7": 4,
      "fields-1": 3,
      "fields-2": 3,
      "fields-6": 3,
      "waterworks-5": 1,
      "waterworks-1": 2,
      "waterworks-8": 2
    },
    "11": {
      "total": 22,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 2,
      "fields-3": 2,
      "fields-5": 1,
      "waterworks-2": 3,
      "waterworks-4": 3,
      "waterworks-7": 2,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-3": 2,
      "waterworks-6": 1,
      "waterworks-8": 1
    },
    "12": {
      "total": 33,
      "totalYears": 4,
      "fields-1": 3,
      "fields-3": 4,
      "fields-4": 2,
      "fields-5": 4,
      "fields-6": 3,
      "waterworks-1": 3,
      "waterworks-2": 4,
      "waterworks-4": 2,
      "waterworks-7": 1,
      "fields-2": 2,
      "waterworks-3": 2,
      "waterworks-8": 2,
      "waterworks-6": 1
    },
    "08": {
      "total": 25,
      "totalYears": 3,
      "fields-1": 2,
      "fields-3": 3,
      "fields-4": 2,
      "fields-5": 2,
      "fields-6": 3,
      "waterworks-1": 2,
      "waterworks-2": 3,
      "waterworks-7": 2,
      "fields-2": 2,
      "waterworks-4": 2,
      "waterworks-6": 2
    },
    "01": {
      "total": 40,
      "totalYears": 4,
      "fields-1": 3,
      "fields-2": 3,
      "fields-3": 4,
      "fields-6": 4,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 4,
      "waterworks-4": 4,
      "waterworks-5": 2,
      "waterworks-7": 3,
      "waterworks-8": 2,
      "fields-5": 3,
      "fields-4": 1,
      "waterworks-6": 1
    },
    "09": {
      "total": 36,
      "totalYears": 4,
      "fields-1": 3,
      "fields-2": 4,
      "fields-3": 4,
      "fields-4": 4,
      "fields-5": 3,
      "fields-6": 2,
      "waterworks-3": 3,
      "waterworks-4": 2,
      "waterworks-5": 1,
      "waterworks-7": 2,
      "waterworks-8": 2,
      "waterworks-2": 3,
      "waterworks-6": 1,
      "waterworks-1": 2
    },
    "07": {
      "total": 26,
      "totalYears": 4,
      "fields-1": 1,
      "fields-2": 4,
      "fields-3": 2,
      "fields-4": 2,
      "fields-5": 3,
      "fields-6": 2,
      "waterworks-2": 3,
      "waterworks-4": 2,
      "waterworks-8": 2,
      "waterworks-1": 2,
      "waterworks-3": 1,
      "waterworks-6": 1,
      "waterworks-7": 1
    },
    "06": {
      "total": 34,
      "totalYears": 4,
      "fields-3": 3,
      "fields-5": 2,
      "waterworks-2": 4,
      "waterworks-3": 3,
      "waterworks-7": 4,
      "waterworks-8": 2,
      "fields-1": 2,
      "fields-2": 3,
      "fields-4": 2,
      "fields-6": 3,
      "waterworks-4": 2,
      "waterworks-1": 2,
      "waterworks-5": 1,
      "waterworks-6": 1
    },
    "05": {
      "total": 18,
      "totalYears": 3,
      "fields-1": 3,
      "fields-3": 2,
      "fields-5": 2,
      "waterworks-6": 1,
      "waterworks-7": 1,
      "fields-2": 2,
      "fields-6": 2,
      "waterworks-1": 1,
      "waterworks-3": 1,
      "waterworks-8": 1,
      "waterworks-2": 1,
      "waterworks-4": 1
    },
    "04": {
      "total": 35,
      "totalYears": 3,
      "fields-1": 3,
      "fields-3": 3,
      "fields-4": 3,
      "fields-5": 3,
      "fields-6": 3,
      "waterworks-2": 3,
      "waterworks-3": 2,
      "waterworks-4": 3,
      "waterworks-6": 1,
      "waterworks-7": 3,
      "waterworks-8": 2,
      "fields-2": 2,
      "waterworks-1": 2,
      "waterworks-5": 2
    },
    "03": {
      "total": 13,
      "totalYears": 1,
      "fields-1": 1,
      "fields-2": 1,
      "fields-3": 1,
      "fields-4": 1,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-5": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    },
    "02": {
      "total": 26,
      "totalYears": 2,
      "fields-1": 2,
      "fields-2": 2,
      "fields-3": 2,
      "fields-4": 2,
      "fields-5": 2,
      "fields-6": 2,
      "waterworks-1": 2,
      "waterworks-2": 2,
      "waterworks-3": 2,
      "waterworks-4": 2,
      "waterworks-5": 2,
      "waterworks-7": 1,
      "waterworks-8": 2,
      "waterworks-6": 1
    }
  },
  "Long-tailed Tit": {
    "10": {
      "total": 25,
      "totalYears": 4,
      "fields-1": 4,
      "fields-3": 2,
      "waterworks-2": 2,
      "waterworks-4": 4,
      "fields-2": 1,
      "fields-4": 1,
      "fields-6": 2,
      "waterworks-1": 2,
      "waterworks-6": 1,
      "waterworks-7": 1,
      "fields-5": 2,
      "waterworks-3": 1,
      "waterworks-8": 2
    },
    "11": {
      "total": 19,
      "totalYears": 3,
      "fields-3": 3,
      "waterworks-2": 3,
      "waterworks-4": 3,
      "waterworks-5": 1,
      "waterworks-6": 2,
      "fields-1": 2,
      "waterworks-1": 1,
      "waterworks-3": 2,
      "waterworks-7": 1,
      "waterworks-8": 1
    },
    "12": {
      "total": 17,
      "totalYears": 4,
      "fields-1": 2,
      "waterworks-1": 1,
      "waterworks-2": 3,
      "waterworks-3": 3,
      "waterworks-4": 1,
      "waterworks-7": 1,
      "fields-3": 2,
      "fields-5": 1,
      "waterworks-5": 1,
      "fields-2": 1,
      "fields-4": 1
    },
    "08": {
      "total": 17,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 1,
      "fields-6": 1,
      "waterworks-1": 2,
      "waterworks-2": 2,
      "waterworks-3": 1,
      "waterworks-4": 2,
      "waterworks-8": 2,
      "fields-4": 1,
      "waterworks-7": 1,
      "fields-5": 1
    },
    "01": {
      "total": 18,
      "totalYears": 4,
      "fields-1": 3,
      "fields-4": 1,
      "fields-6": 1,
      "waterworks-1": 2,
      "waterworks-2": 3,
      "waterworks-4": 2,
      "waterworks-7": 1,
      "waterworks-6": 1,
      "fields-3": 1,
      "waterworks-3": 2,
      "fields-2": 1
    },
    "09": {
      "total": 22,
      "totalYears": 4,
      "fields-1": 2,
      "fields-3": 3,
      "fields-4": 3,
      "fields-6": 1,
      "waterworks-2": 3,
      "waterworks-7": 2,
      "waterworks-1": 1,
      "waterworks-6": 2,
      "fields-2": 1,
      "waterworks-4": 2,
      "waterworks-5": 1,
      "fields-5": 1
    },
    "07": {
      "total": 13,
      "totalYears": 4,
      "fields-2": 1,
      "waterworks-4": 3,
      "waterworks-6": 2,
      "fields-1": 1,
      "fields-4": 2,
      "waterworks-2": 2,
      "waterworks-3": 1,
      "waterworks-8": 1
    },
    "06": {
      "total": 17,
      "totalYears": 4,
      "fields-1": 2,
      "fields-3": 1,
      "waterworks-2": 2,
      "waterworks-7": 3,
      "waterworks-4": 3,
      "waterworks-6": 2,
      "fields-4": 1,
      "fields-6": 2,
      "waterworks-1": 1
    },
    "05": {
      "total": 18,
      "totalYears": 3,
      "fields-1": 3,
      "waterworks-2": 2,
      "waterworks-4": 2,
      "waterworks-6": 2,
      "waterworks-7": 1,
      "waterworks-8": 2,
      "fields-4": 2,
      "fields-6": 1,
      "waterworks-1": 1,
      "fields-2": 1,
      "waterworks-3": 1
    },
    "04": {
      "total": 16,
      "totalYears": 3,
      "fields-1": 2,
      "fields-3": 2,
      "waterworks-2": 2,
      "waterworks-6": 2,
      "waterworks-7": 1,
      "waterworks-8": 1,
      "fields-5": 2,
      "fields-6": 2,
      "waterworks-3": 1,
      "waterworks-4": 1
    },
    "03": {
      "total": 4,
      "totalYears": 1,
      "fields-1": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-2": 1
    },
    "02": {
      "total": 13,
      "totalYears": 2,
      "fields-2": 1,
      "fields-5": 1,
      "waterworks-1": 2,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-5": 1,
      "waterworks-6": 1,
      "waterworks-8": 2,
      "fields-1": 1,
      "fields-3": 1,
      "waterworks-4": 1
    }
  },
  "Chiffchaff": {
    "10": {
      "total": 28,
      "totalYears": 4,
      "fields-1": 2,
      "fields-3": 2,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 4,
      "waterworks-4": 4,
      "waterworks-8": 2,
      "fields-2": 1,
      "waterworks-6": 1,
      "waterworks-7": 3,
      "fields-4": 1
    },
    "11": {
      "total": 12,
      "totalYears": 3,
      "waterworks-1": 2,
      "waterworks-3": 1,
      "waterworks-4": 3,
      "waterworks-6": 1,
      "waterworks-7": 1,
      "waterworks-8": 1,
      "fields-3": 1,
      "waterworks-2": 2
    },
    "12": {
      "total": 15,
      "totalYears": 4,
      "fields-1": 2,
      "fields-4": 1,
      "waterworks-2": 2,
      "waterworks-4": 2,
      "waterworks-7": 2,
      "fields-6": 1,
      "waterworks-5": 2,
      "waterworks-6": 1,
      "fields-5": 1,
      "waterworks-3": 1
    },
    "08": {
      "total": 16,
      "totalYears": 3,
      "fields-1": 3,
      "waterworks-2": 3,
      "waterworks-7": 1,
      "fields-3": 2,
      "fields-6": 2,
      "waterworks-1": 2,
      "waterworks-4": 1,
      "waterworks-8": 2
    },
    "09": {
      "total": 34,
      "totalYears": 4,
      "fields-1": 2,
      "fields-3": 4,
      "fields-4": 3,
      "fields-6": 1,
      "waterworks-1": 4,
      "waterworks-2": 4,
      "waterworks-4": 4,
      "waterworks-5": 1,
      "waterworks-8": 3,
      "fields-2": 3,
      "waterworks-6": 2,
      "waterworks-7": 2,
      "waterworks-3": 1
    },
    "07": {
      "total": 19,
      "totalYears": 4,
      "fields-1": 2,
      "fields-3": 1,
      "fields-4": 3,
      "waterworks-1": 2,
      "waterworks-3": 3,
      "waterworks-2": 3,
      "waterworks-4": 2,
      "waterworks-7": 1,
      "waterworks-8": 1,
      "waterworks-6": 1
    },
    "06": {
      "total": 37,
      "totalYears": 4,
      "fields-1": 3,
      "fields-3": 3,
      "fields-4": 1,
      "fields-5": 1,
      "waterworks-1": 3,
      "waterworks-2": 4,
      "waterworks-3": 4,
      "waterworks-4": 3,
      "waterworks-6": 3,
      "waterworks-7": 4,
      "waterworks-8": 4,
      "fields-2": 1,
      "fields-6": 3
    },
    "05": {
      "total": 26,
      "totalYears": 3,
      "fields-1": 2,
      "fields-3": 3,
      "fields-4": 2,
      "waterworks-2": 3,
      "waterworks-3": 3,
      "waterworks-6": 2,
      "waterworks-7": 3,
      "waterworks-8": 2,
      "fields-2": 2,
      "fields-5": 1,
      "waterworks-1": 2,
      "waterworks-4": 1
    },
    "04": {
      "total": 28,
      "totalYears": 3,
      "fields-1": 2,
      "fields-3": 2,
      "fields-4": 3,
      "fields-5": 2,
      "waterworks-2": 3,
      "waterworks-3": 3,
      "waterworks-6": 2,
      "waterworks-7": 3,
      "fields-2": 2,
      "waterworks-1": 2,
      "waterworks-4": 2,
      "waterworks-8": 2
    },
    "01": {
      "total": 3,
      "totalYears": 2,
      "fields-1": 1,
      "waterworks-2": 2
    },
    "03": {
      "total": 2,
      "totalYears": 1,
      "fields-1": 1,
      "waterworks-2": 1
    },
    "02": {
      "total": 3,
      "totalYears": 1,
      "waterworks-1": 1,
      "waterworks-3": 1,
      "waterworks-8": 1
    }
  },
  "Blackcap": {
    "10": {
      "total": 3,
      "totalYears": 2,
      "waterworks-7": 1,
      "waterworks-3": 1,
      "waterworks-8": 1
    },
    "08": {
      "total": 21,
      "totalYears": 3,
      "fields-4": 2,
      "fields-5": 2,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-4": 3,
      "waterworks-7": 3,
      "fields-1": 1,
      "fields-3": 1,
      "waterworks-6": 1,
      "waterworks-8": 2,
      "fields-2": 1,
      "waterworks-3": 1,
      "waterworks-5": 1
    },
    "07": {
      "total": 44,
      "totalYears": 4,
      "fields-2": 4,
      "fields-3": 4,
      "fields-5": 3,
      "waterworks-2": 4,
      "waterworks-4": 4,
      "waterworks-5": 2,
      "waterworks-6": 3,
      "waterworks-8": 3,
      "fields-1": 3,
      "fields-4": 3,
      "fields-6": 2,
      "waterworks-1": 3,
      "waterworks-3": 3,
      "waterworks-7": 3
    },
    "06": {
      "total": 43,
      "totalYears": 4,
      "fields-2": 2,
      "fields-3": 4,
      "fields-4": 4,
      "fields-5": 2,
      "waterworks-2": 4,
      "waterworks-4": 4,
      "waterworks-6": 4,
      "waterworks-7": 4,
      "waterworks-8": 4,
      "fields-1": 3,
      "fields-6": 2,
      "waterworks-1": 3,
      "waterworks-3": 2,
      "waterworks-5": 1
    },
    "05": {
      "total": 34,
      "totalYears": 3,
      "fields-1": 3,
      "fields-3": 3,
      "fields-4": 3,
      "fields-5": 2,
      "fields-6": 3,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 3,
      "waterworks-5": 2,
      "waterworks-6": 2,
      "waterworks-7": 3,
      "waterworks-8": 2,
      "fields-2": 1,
      "waterworks-4": 1
    },
    "04": {
      "total": 29,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 2,
      "fields-3": 3,
      "fields-6": 2,
      "waterworks-1": 3,
      "waterworks-2": 2,
      "waterworks-3": 3,
      "waterworks-7": 2,
      "waterworks-8": 3,
      "fields-5": 1,
      "waterworks-4": 2,
      "waterworks-6": 2,
      "fields-4": 1
    },
    "09": {
      "total": 11,
      "totalYears": 3,
      "waterworks-4": 3,
      "fields-2": 2,
      "fields-3": 2,
      "waterworks-7": 1,
      "waterworks-1": 1,
      "waterworks-6": 1,
      "waterworks-8": 1
    }
  },
  "Wren": {
    "10": {
      "total": 39,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 3,
      "fields-3": 3,
      "fields-4": 3,
      "fields-5": 3,
      "waterworks-1": 4,
      "waterworks-2": 4,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "waterworks-5": 1,
      "fields-6": 3,
      "waterworks-7": 2,
      "waterworks-8": 2,
      "waterworks-6": 1
    },
    "11": {
      "total": 28,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 3,
      "fields-3": 2,
      "fields-4": 2,
      "fields-6": 1,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 1,
      "waterworks-4": 3,
      "waterworks-7": 3,
      "waterworks-8": 2,
      "fields-5": 1,
      "waterworks-6": 1
    },
    "12": {
      "total": 31,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 2,
      "fields-3": 4,
      "fields-4": 4,
      "waterworks-2": 4,
      "waterworks-8": 2,
      "fields-5": 3,
      "waterworks-3": 2,
      "waterworks-4": 2,
      "waterworks-6": 2,
      "fields-6": 1,
      "waterworks-1": 1
    },
    "08": {
      "total": 32,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 3,
      "fields-3": 3,
      "fields-4": 2,
      "fields-5": 1,
      "fields-6": 3,
      "waterworks-1": 2,
      "waterworks-2": 3,
      "waterworks-3": 2,
      "waterworks-4": 3,
      "waterworks-5": 2,
      "waterworks-6": 2,
      "waterworks-7": 2,
      "waterworks-8": 1
    },
    "01": {
      "total": 31,
      "totalYears": 4,
      "fields-1": 3,
      "fields-2": 3,
      "fields-3": 4,
      "fields-4": 3,
      "waterworks-2": 4,
      "waterworks-3": 2,
      "waterworks-4": 4,
      "waterworks-6": 2,
      "waterworks-7": 1,
      "fields-6": 1,
      "waterworks-1": 3,
      "fields-5": 1
    },
    "09": {
      "total": 32,
      "totalYears": 4,
      "fields-2": 3,
      "fields-4": 2,
      "fields-5": 2,
      "waterworks-2": 4,
      "waterworks-3": 4,
      "waterworks-4": 3,
      "waterworks-6": 2,
      "waterworks-7": 2,
      "waterworks-8": 2,
      "fields-1": 2,
      "fields-3": 2,
      "fields-6": 1,
      "waterworks-1": 2,
      "waterworks-5": 1
    },
    "07": {
      "total": 40,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 4,
      "fields-3": 3,
      "fields-4": 4,
      "fields-6": 2,
      "waterworks-1": 4,
      "waterworks-2": 4,
      "waterworks-4": 4,
      "waterworks-7": 4,
      "waterworks-8": 1,
      "fields-5": 1,
      "waterworks-3": 1,
      "waterworks-5": 2,
      "waterworks-6": 2
    },
    "06": {
      "total": 45,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 4,
      "fields-3": 4,
      "fields-6": 2,
      "waterworks-2": 4,
      "waterworks-3": 4,
      "waterworks-6": 3,
      "waterworks-7": 3,
      "fields-4": 3,
      "fields-5": 3,
      "waterworks-1": 3,
      "waterworks-4": 3,
      "waterworks-5": 3,
      "waterworks-8": 2
    },
    "05": {
      "total": 38,
      "totalYears": 3,
      "fields-1": 3,
      "fields-3": 3,
      "fields-4": 3,
      "fields-5": 3,
      "fields-6": 3,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "waterworks-5": 2,
      "waterworks-6": 3,
      "waterworks-8": 3,
      "waterworks-7": 2,
      "fields-2": 1
    },
    "04": {
      "total": 37,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 3,
      "fields-3": 3,
      "fields-4": 3,
      "fields-5": 3,
      "fields-6": 2,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "waterworks-5": 2,
      "waterworks-6": 3,
      "waterworks-7": 2,
      "waterworks-8": 1
    },
    "03": {
      "total": 13,
      "totalYears": 1,
      "fields-1": 1,
      "fields-2": 1,
      "fields-3": 1,
      "fields-4": 1,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-5": 1,
      "waterworks-6": 1,
      "waterworks-7": 1
    },
    "02": {
      "total": 18,
      "totalYears": 2,
      "fields-1": 2,
      "fields-5": 2,
      "waterworks-1": 2,
      "waterworks-2": 2,
      "waterworks-3": 1,
      "waterworks-4": 2,
      "waterworks-6": 1,
      "waterworks-7": 2,
      "fields-2": 1,
      "fields-3": 1,
      "fields-6": 1,
      "waterworks-8": 1
    }
  },
  "Song Thrush": {
    "10": {
      "total": 13,
      "totalYears": 3,
      "fields-3": 2,
      "waterworks-2": 2,
      "waterworks-7": 3,
      "waterworks-8": 2,
      "fields-4": 2,
      "fields-2": 1,
      "waterworks-1": 1
    },
    "11": {
      "total": 5,
      "totalYears": 2,
      "fields-3": 2,
      "waterworks-1": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    },
    "12": {
      "total": 13,
      "totalYears": 4,
      "fields-1": 2,
      "fields-4": 1,
      "waterworks-1": 3,
      "waterworks-4": 1,
      "fields-3": 2,
      "waterworks-2": 2,
      "waterworks-3": 1,
      "fields-2": 1
    },
    "08": {
      "total": 4,
      "totalYears": 3,
      "fields-4": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-3": 1
    },
    "01": {
      "total": 22,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 2,
      "fields-3": 3,
      "fields-4": 2,
      "waterworks-2": 3,
      "waterworks-4": 1,
      "fields-6": 2,
      "waterworks-1": 2,
      "fields-5": 1,
      "waterworks-3": 1,
      "waterworks-6": 1
    },
    "09": {
      "total": 5,
      "totalYears": 4,
      "fields-4": 1,
      "waterworks-2": 1,
      "fields-3": 1,
      "waterworks-1": 2
    },
    "07": {
      "total": 18,
      "totalYears": 4,
      "fields-1": 2,
      "fields-3": 4,
      "waterworks-2": 3,
      "waterworks-7": 2,
      "waterworks-1": 2,
      "waterworks-4": 1,
      "fields-2": 2,
      "waterworks-6": 1,
      "waterworks-3": 1
    },
    "06": {
      "total": 22,
      "totalYears": 4,
      "fields-4": 2,
      "waterworks-1": 3,
      "waterworks-2": 4,
      "waterworks-7": 2,
      "fields-3": 3,
      "waterworks-3": 1,
      "waterworks-5": 1,
      "waterworks-6": 1,
      "fields-1": 2,
      "fields-2": 1,
      "waterworks-4": 1,
      "waterworks-8": 1
    },
    "05": {
      "total": 14,
      "totalYears": 3,
      "fields-1": 2,
      "fields-2": 1,
      "fields-3": 2,
      "waterworks-1": 3,
      "waterworks-7": 1,
      "waterworks-2": 1,
      "waterworks-3": 2,
      "waterworks-6": 1,
      "fields-4": 1
    },
    "04": {
      "total": 17,
      "totalYears": 3,
      "fields-3": 3,
      "fields-5": 1,
      "fields-1": 2,
      "fields-2": 1,
      "waterworks-1": 2,
      "waterworks-2": 2,
      "waterworks-7": 2,
      "waterworks-8": 2,
      "waterworks-4": 1,
      "waterworks-6": 1
    },
    "03": {
      "total": 7,
      "totalYears": 1,
      "fields-1": 1,
      "fields-2": 1,
      "fields-3": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-4": 1,
      "waterworks-7": 1
    },
    "02": {
      "total": 13,
      "totalYears": 2,
      "fields-1": 2,
      "fields-2": 2,
      "fields-3": 2,
      "fields-4": 1,
      "waterworks-1": 2,
      "fields-6": 1,
      "waterworks-2": 1,
      "waterworks-6": 1,
      "waterworks-7": 1
    }
  },
  "Blackbird": {
    "10": {
      "total": 26,
      "totalYears": 4,
      "fields-2": 1,
      "fields-3": 4,
      "waterworks-2": 4,
      "waterworks-3": 3,
      "waterworks-7": 2,
      "waterworks-8": 4,
      "fields-4": 1,
      "waterworks-1": 3,
      "fields-1": 2,
      "waterworks-5": 2
    },
    "11": {
      "total": 27,
      "totalYears": 3,
      "fields-1": 3,
      "fields-3": 2,
      "waterworks-1": 3,
      "waterworks-2": 2,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "waterworks-6": 2,
      "waterworks-7": 3,
      "waterworks-8": 3,
      "waterworks-5": 2,
      "fields-6": 1
    },
    "12": {
      "total": 38,
      "totalYears": 4,
      "fields-1": 3,
      "fields-2": 2,
      "fields-3": 4,
      "fields-4": 3,
      "fields-6": 3,
      "waterworks-1": 4,
      "waterworks-2": 4,
      "waterworks-3": 2,
      "waterworks-4": 3,
      "waterworks-6": 3,
      "waterworks-7": 4,
      "waterworks-8": 2,
      "fields-5": 1
    },
    "08": {
      "total": 17,
      "totalYears": 3,
      "fields-1": 1,
      "fields-3": 1,
      "fields-4": 2,
      "waterworks-1": 1,
      "waterworks-2": 3,
      "waterworks-4": 3,
      "waterworks-6": 2,
      "waterworks-7": 1,
      "waterworks-8": 2,
      "waterworks-3": 1
    },
    "01": {
      "total": 24,
      "totalYears": 4,
      "fields-3": 3,
      "waterworks-2": 4,
      "waterworks-6": 2,
      "waterworks-7": 1,
      "waterworks-8": 4,
      "fields-1": 2,
      "waterworks-3": 3,
      "fields-2": 1,
      "waterworks-1": 1,
      "waterworks-4": 2,
      "waterworks-5": 1
    },
    "09": {
      "total": 23,
      "totalYears": 4,
      "fields-1": 2,
      "fields-4": 1,
      "waterworks-2": 4,
      "waterworks-3": 2,
      "waterworks-8": 3,
      "waterworks-1": 3,
      "waterworks-4": 3,
      "waterworks-7": 3,
      "fields-3": 2
    },
    "07": {
      "total": 29,
      "totalYears": 4,
      "fields-2": 2,
      "fields-3": 4,
      "fields-4": 3,
      "waterworks-3": 1,
      "waterworks-4": 4,
      "waterworks-7": 4,
      "fields-1": 2,
      "waterworks-1": 3,
      "waterworks-6": 3,
      "waterworks-8": 2,
      "waterworks-2": 1
    },
    "06": {
      "total": 34,
      "totalYears": 4,
      "fields-1": 3,
      "fields-3": 4,
      "fields-4": 2,
      "fields-5": 1,
      "waterworks-1": 4,
      "waterworks-2": 3,
      "waterworks-3": 2,
      "waterworks-4": 4,
      "waterworks-6": 3,
      "waterworks-7": 4,
      "waterworks-8": 1,
      "fields-2": 2,
      "fields-6": 1
    },
    "05": {
      "total": 32,
      "totalYears": 3,
      "fields-1": 2,
      "fields-2": 3,
      "fields-3": 2,
      "fields-4": 2,
      "fields-5": 2,
      "fields-6": 2,
      "waterworks-1": 3,
      "waterworks-2": 2,
      "waterworks-3": 3,
      "waterworks-4": 1,
      "waterworks-5": 1,
      "waterworks-6": 3,
      "waterworks-7": 3,
      "waterworks-8": 3
    },
    "04": {
      "total": 28,
      "totalYears": 3,
      "fields-1": 3,
      "fields-3": 3,
      "fields-4": 2,
      "fields-5": 2,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 1,
      "waterworks-4": 2,
      "waterworks-8": 2,
      "fields-2": 2,
      "fields-6": 2,
      "waterworks-6": 2,
      "waterworks-7": 1
    },
    "03": {
      "total": 10,
      "totalYears": 1,
      "fields-1": 1,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-6": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    },
    "02": {
      "total": 14,
      "totalYears": 2,
      "fields-1": 2,
      "fields-3": 2,
      "fields-6": 1,
      "waterworks-1": 2,
      "waterworks-2": 2,
      "waterworks-8": 2,
      "fields-2": 1,
      "fields-5": 1,
      "waterworks-7": 1
    }
  },
  "Robin": {
    "10": {
      "total": 52,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 2,
      "fields-3": 4,
      "fields-4": 3,
      "fields-5": 4,
      "fields-6": 4,
      "waterworks-1": 4,
      "waterworks-2": 4,
      "waterworks-3": 4,
      "waterworks-4": 4,
      "waterworks-5": 4,
      "waterworks-6": 3,
      "waterworks-7": 4,
      "waterworks-8": 4
    },
    "11": {
      "total": 36,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 2,
      "fields-3": 3,
      "fields-4": 2,
      "fields-5": 2,
      "fields-6": 3,
      "waterworks-1": 2,
      "waterworks-2": 3,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "waterworks-5": 2,
      "waterworks-7": 3,
      "waterworks-8": 3,
      "waterworks-6": 2
    },
    "12": {
      "total": 47,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 2,
      "fields-3": 4,
      "fields-4": 2,
      "fields-5": 3,
      "fields-6": 4,
      "waterworks-1": 4,
      "waterworks-2": 4,
      "waterworks-3": 4,
      "waterworks-4": 4,
      "waterworks-5": 3,
      "waterworks-7": 4,
      "waterworks-8": 3,
      "waterworks-6": 2
    },
    "08": {
      "total": 34,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 2,
      "fields-3": 3,
      "fields-4": 2,
      "fields-5": 3,
      "fields-6": 3,
      "waterworks-1": 3,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "waterworks-5": 2,
      "waterworks-7": 2,
      "waterworks-8": 2,
      "waterworks-2": 2,
      "waterworks-6": 1
    },
    "01": {
      "total": 45,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 1,
      "fields-3": 3,
      "fields-4": 3,
      "fields-5": 3,
      "fields-6": 4,
      "waterworks-1": 4,
      "waterworks-2": 4,
      "waterworks-3": 4,
      "waterworks-4": 4,
      "waterworks-5": 2,
      "waterworks-6": 3,
      "waterworks-7": 3,
      "waterworks-8": 3
    },
    "09": {
      "total": 49,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 3,
      "fields-3": 4,
      "fields-4": 4,
      "fields-5": 3,
      "fields-6": 4,
      "waterworks-1": 4,
      "waterworks-2": 4,
      "waterworks-3": 4,
      "waterworks-4": 4,
      "waterworks-5": 3,
      "waterworks-7": 3,
      "waterworks-8": 4,
      "waterworks-6": 1
    },
    "07": {
      "total": 39,
      "totalYears": 4,
      "fields-1": 4,
      "fields-2": 3,
      "fields-3": 4,
      "fields-4": 3,
      "fields-5": 3,
      "fields-6": 3,
      "waterworks-1": 4,
      "waterworks-2": 4,
      "waterworks-3": 3,
      "waterworks-4": 1,
      "waterworks-5": 1,
      "waterworks-7": 3,
      "waterworks-8": 2,
      "waterworks-6": 1
    },
    "06": {
      "total": 32,
      "totalYears": 4,
      "fields-1": 3,
      "fields-4": 2,
      "waterworks-1": 4,
      "waterworks-2": 3,
      "waterworks-5": 1,
      "waterworks-7": 3,
      "waterworks-8": 4,
      "fields-2": 3,
      "waterworks-3": 2,
      "waterworks-4": 1,
      "fields-3": 2,
      "fields-5": 2,
      "fields-6": 1,
      "waterworks-6": 1
    },
    "05": {
      "total": 28,
      "totalYears": 3,
      "fields-1": 2,
      "fields-3": 2,
      "fields-5": 2,
      "fields-6": 3,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 3,
      "waterworks-4": 2,
      "waterworks-6": 2,
      "waterworks-7": 3,
      "waterworks-8": 3
    },
    "04": {
      "total": 30,
      "totalYears": 3,
      "fields-1": 2,
      "fields-2": 2,
      "fields-3": 3,
      "fields-4": 1,
      "fields-5": 3,
      "fields-6": 3,
      "waterworks-1": 3,
      "waterworks-2": 3,
      "waterworks-3": 2,
      "waterworks-4": 2,
      "waterworks-6": 1,
      "waterworks-7": 2,
      "waterworks-8": 3
    },
    "03": {
      "total": 11,
      "totalYears": 1,
      "fields-1": 1,
      "fields-2": 1,
      "fields-3": 1,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-5": 1,
      "waterworks-6": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    },
    "02": {
      "total": 24,
      "totalYears": 2,
      "fields-1": 2,
      "fields-3": 2,
      "fields-4": 1,
      "fields-5": 2,
      "fields-6": 2,
      "waterworks-1": 2,
      "waterworks-2": 2,
      "waterworks-3": 2,
      "waterworks-4": 2,
      "waterworks-5": 2,
      "waterworks-6": 2,
      "waterworks-7": 2,
      "waterworks-8": 1
    }
  },
  "Dunnock": {
    "10": {
      "total": 21,
      "totalYears": 4,
      "fields-2": 1,
      "fields-5": 2,
      "fields-6": 2,
      "waterworks-2": 2,
      "waterworks-8": 3,
      "fields-3": 2,
      "waterworks-1": 3,
      "fields-1": 1,
      "waterworks-3": 2,
      "waterworks-4": 2,
      "waterworks-5": 1
    },
    "11": {
      "total": 16,
      "totalYears": 3,
      "fields-1": 2,
      "waterworks-3": 1,
      "waterworks-7": 3,
      "waterworks-8": 3,
      "fields-2": 1,
      "waterworks-1": 2,
      "waterworks-2": 1,
      "waterworks-4": 2,
      "fields-3": 1
    },
    "12": {
      "total": 11,
      "totalYears": 4,
      "fields-3": 2,
      "fields-4": 1,
      "fields-6": 2,
      "waterworks-7": 2,
      "fields-1": 2,
      "waterworks-4": 1,
      "waterworks-1": 1
    },
    "08": {
      "total": 6,
      "totalYears": 2,
      "fields-4": 1,
      "fields-6": 1,
      "waterworks-1": 2,
      "waterworks-4": 1,
      "waterworks-3": 1
    },
    "01": {
      "total": 7,
      "totalYears": 3,
      "fields-3": 3,
      "fields-6": 1,
      "waterworks-4": 1,
      "waterworks-2": 1,
      "waterworks-3": 1
    },
    "09": {
      "total": 11,
      "totalYears": 4,
      "fields-5": 2,
      "fields-1": 1,
      "waterworks-7": 1,
      "waterworks-1": 2,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "fields-3": 1,
      "waterworks-4": 1,
      "waterworks-8": 1
    },
    "06": {
      "total": 21,
      "totalYears": 4,
      "fields-1": 2,
      "waterworks-7": 4,
      "fields-3": 1,
      "fields-4": 1,
      "fields-5": 2,
      "waterworks-2": 2,
      "waterworks-4": 2,
      "waterworks-5": 2,
      "waterworks-8": 2,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-6": 1
    },
    "05": {
      "total": 13,
      "totalYears": 3,
      "fields-6": 1,
      "waterworks-4": 2,
      "waterworks-5": 1,
      "waterworks-8": 3,
      "fields-3": 2,
      "waterworks-1": 1,
      "waterworks-6": 1,
      "waterworks-2": 1,
      "waterworks-7": 1
    },
    "04": {
      "total": 28,
      "totalYears": 3,
      "fields-1": 2,
      "fields-2": 2,
      "fields-3": 3,
      "fields-4": 1,
      "fields-5": 1,
      "fields-6": 2,
      "waterworks-1": 3,
      "waterworks-2": 2,
      "waterworks-3": 3,
      "waterworks-4": 3,
      "waterworks-5": 1,
      "waterworks-8": 3,
      "waterworks-6": 1,
      "waterworks-7": 1
    },
    "07": {
      "total": 20,
      "totalYears": 3,
      "fields-2": 3,
      "fields-3": 1,
      "waterworks-1": 2,
      "waterworks-2": 3,
      "waterworks-5": 2,
      "waterworks-7": 2,
      "fields-6": 1,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-6": 1,
      "waterworks-8": 2,
      "fields-5": 1
    },
    "03": {
      "total": 11,
      "totalYears": 1,
      "fields-1": 1,
      "fields-3": 1,
      "fields-4": 1,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-6": 1,
      "waterworks-7": 1
    },
    "02": {
      "total": 13,
      "totalYears": 2,
      "fields-1": 2,
      "waterworks-1": 2,
      "waterworks-4": 2,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-6": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    }
  },
  "Grey Wagtail": {
    "10": {
      "total": 10,
      "totalYears": 4,
      "fields-3": 1,
      "fields-4": 2,
      "waterworks-3": 1,
      "waterworks-4": 3,
      "fields-5": 1,
      "fields-1": 1,
      "waterworks-8": 1
    },
    "11": {
      "total": 3,
      "totalYears": 3,
      "fields-5": 1,
      "waterworks-1": 1,
      "fields-6": 1
    },
    "12": {
      "total": 3,
      "totalYears": 3,
      "fields-4": 1,
      "fields-3": 1,
      "fields-6": 1
    },
    "08": {
      "total": 1,
      "totalYears": 1,
      "fields-1": 1
    },
    "09": {
      "total": 7,
      "totalYears": 4,
      "fields-1": 1,
      "waterworks-8": 1,
      "fields-4": 2,
      "fields-6": 1,
      "fields-3": 1,
      "waterworks-1": 1
    },
    "07": {
      "total": 3,
      "totalYears": 2,
      "fields-1": 1,
      "waterworks-4": 1,
      "fields-6": 1
    },
    "06": {
      "total": 1,
      "totalYears": 1,
      "waterworks-5": 1
    },
    "04": {
      "total": 3,
      "totalYears": 2,
      "waterworks-4": 2,
      "waterworks-5": 1
    },
    "05": {
      "total": 3,
      "totalYears": 2,
      "fields-6": 1,
      "waterworks-4": 1,
      "fields-3": 1
    },
    "03": {
      "total": 1,
      "totalYears": 1,
      "fields-6": 1
    },
    "02": {
      "total": 2,
      "totalYears": 2,
      "fields-4": 1,
      "fields-5": 1
    },
    "01": {
      "total": 1,
      "totalYears": 1,
      "fields-1": 1
    }
  },
  "Goldfinch": {
    "10": {
      "total": 8,
      "totalYears": 3,
      "fields-6": 1,
      "waterworks-7": 1,
      "waterworks-1": 2,
      "waterworks-2": 2,
      "waterworks-6": 1,
      "waterworks-8": 1
    },
    "11": {
      "total": 5,
      "totalYears": 3,
      "waterworks-2": 1,
      "fields-1": 1,
      "fields-3": 1,
      "fields-5": 1,
      "waterworks-1": 1
    },
    "12": {
      "total": 7,
      "totalYears": 4,
      "fields-1": 2,
      "fields-5": 1,
      "waterworks-1": 1,
      "fields-2": 1,
      "waterworks-4": 1,
      "waterworks-7": 1
    },
    "08": {
      "total": 18,
      "totalYears": 3,
      "fields-2": 2,
      "fields-3": 2,
      "fields-6": 1,
      "waterworks-1": 3,
      "waterworks-2": 2,
      "waterworks-3": 1,
      "waterworks-5": 2,
      "fields-1": 1,
      "fields-5": 1,
      "waterworks-6": 1,
      "waterworks-7": 1,
      "waterworks-4": 1
    },
    "01": {
      "total": 9,
      "totalYears": 3,
      "fields-5": 1,
      "waterworks-2": 2,
      "waterworks-4": 3,
      "waterworks-7": 2,
      "waterworks-8": 1
    },
    "07": {
      "total": 18,
      "totalYears": 4,
      "fields-1": 3,
      "fields-2": 2,
      "fields-3": 3,
      "waterworks-7": 2,
      "waterworks-8": 2,
      "fields-5": 2,
      "waterworks-1": 3,
      "waterworks-4": 1
    },
    "06": {
      "total": 21,
      "totalYears": 4,
      "fields-1": 3,
      "fields-4": 1,
      "fields-6": 2,
      "waterworks-1": 2,
      "waterworks-4": 2,
      "waterworks-7": 3,
      "waterworks-8": 2,
      "fields-2": 2,
      "fields-3": 2,
      "waterworks-2": 1,
      "waterworks-6": 1
    },
    "05": {
      "total": 9,
      "totalYears": 3,
      "waterworks-4": 1,
      "waterworks-7": 2,
      "waterworks-8": 1,
      "fields-2": 1,
      "fields-3": 1,
      "waterworks-2": 1,
      "fields-6": 1,
      "waterworks-6": 1
    },
    "04": {
      "total": 12,
      "totalYears": 3,
      "fields-1": 1,
      "fields-5": 2,
      "waterworks-3": 1,
      "fields-2": 1,
      "fields-3": 2,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-4": 1,
      "waterworks-8": 2
    },
    "09": {
      "total": 5,
      "totalYears": 3,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-7": 1,
      "waterworks-4": 1,
      "waterworks-8": 1
    },
    "03": {
      "total": 7,
      "totalYears": 1,
      "fields-1": 1,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-4": 1,
      "waterworks-6": 1
    },
    "02": {
      "total": 8,
      "totalYears": 2,
      "fields-1": 2,
      "fields-2": 1,
      "fields-3": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-4": 1,
      "waterworks-8": 1
    }
  },
  "Teal": {
    "10": {
      "total": 6,
      "totalYears": 4,
      "fields-4": 1,
      "waterworks-4": 4,
      "waterworks-7": 1
    },
    "11": {
      "total": 7,
      "totalYears": 3,
      "fields-4": 3,
      "waterworks-4": 3,
      "waterworks-7": 1
    },
    "12": {
      "total": 6,
      "totalYears": 4,
      "waterworks-4": 3,
      "fields-4": 3
    },
    "08": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 2
    },
    "09": {
      "total": 4,
      "totalYears": 3,
      "waterworks-7": 1,
      "waterworks-4": 2,
      "waterworks-5": 1
    },
    "04": {
      "total": 5,
      "totalYears": 3,
      "fields-4": 2,
      "fields-3": 1,
      "waterworks-4": 1,
      "waterworks-7": 1
    },
    "01": {
      "total": 6,
      "totalYears": 2,
      "fields-4": 2,
      "waterworks-3": 1,
      "waterworks-4": 2,
      "waterworks-7": 1
    },
    "03": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "02": {
      "total": 4,
      "totalYears": 2,
      "fields-4": 1,
      "waterworks-4": 2,
      "waterworks-7": 1
    }
  },
  "Little Grebe": {
    "10": {
      "total": 4,
      "totalYears": 3,
      "fields-4": 1,
      "waterworks-4": 3
    },
    "11": {
      "total": 3,
      "totalYears": 3,
      "waterworks-4": 3
    },
    "12": {
      "total": 3,
      "totalYears": 3,
      "fields-4": 1,
      "waterworks-4": 2
    },
    "08": {
      "total": 3,
      "totalYears": 3,
      "waterworks-4": 3
    },
    "07": {
      "total": 4,
      "totalYears": 4,
      "waterworks-4": 4
    },
    "06": {
      "total": 5,
      "totalYears": 4,
      "waterworks-4": 4,
      "waterworks-7": 1
    },
    "05": {
      "total": 3,
      "totalYears": 3,
      "waterworks-4": 3
    },
    "04": {
      "total": 4,
      "totalYears": 3,
      "waterworks-4": 3,
      "waterworks-7": 1
    },
    "09": {
      "total": 3,
      "totalYears": 3,
      "waterworks-4": 3
    },
    "03": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "02": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 2
    },
    "01": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    }
  },
  "Feral Pigeon": {
    "10": {
      "total": 6,
      "totalYears": 4,
      "fields-1": 1,
      "waterworks-1": 1,
      "waterworks-3": 1,
      "waterworks-8": 2,
      "fields-2": 1
    },
    "11": {
      "total": 4,
      "totalYears": 3,
      "waterworks-1": 2,
      "waterworks-7": 2
    },
    "12": {
      "total": 3,
      "totalYears": 2,
      "fields-6": 1,
      "fields-2": 1,
      "waterworks-1": 1
    },
    "08": {
      "total": 6,
      "totalYears": 3,
      "waterworks-1": 3,
      "fields-1": 1,
      "waterworks-2": 1,
      "waterworks-3": 1
    },
    "07": {
      "total": 11,
      "totalYears": 4,
      "fields-1": 1,
      "fields-3": 1,
      "fields-5": 1,
      "waterworks-1": 3,
      "waterworks-4": 1,
      "waterworks-5": 1,
      "waterworks-7": 1,
      "fields-4": 1,
      "fields-6": 1
    },
    "06": {
      "total": 7,
      "totalYears": 4,
      "fields-6": 2,
      "fields-1": 1,
      "waterworks-5": 1,
      "waterworks-7": 2,
      "waterworks-4": 1
    },
    "05": {
      "total": 3,
      "totalYears": 3,
      "fields-1": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    },
    "04": {
      "total": 5,
      "totalYears": 2,
      "waterworks-8": 2,
      "fields-2": 1,
      "waterworks-1": 1,
      "waterworks-4": 1
    },
    "09": {
      "total": 7,
      "totalYears": 3,
      "fields-2": 1,
      "fields-3": 1,
      "fields-6": 2,
      "waterworks-1": 2,
      "waterworks-4": 1
    },
    "01": {
      "total": 4,
      "totalYears": 2,
      "fields-5": 1,
      "waterworks-3": 1,
      "waterworks-6": 1,
      "waterworks-1": 1
    },
    "03": {
      "total": 3,
      "totalYears": 1,
      "fields-2": 1,
      "waterworks-1": 1,
      "waterworks-6": 1
    },
    "02": {
      "total": 4,
      "totalYears": 2,
      "fields-6": 1,
      "waterworks-4": 1,
      "fields-3": 1,
      "waterworks-7": 1
    }
  },
  "Herring Gull": {
    "10": {
      "total": 7,
      "totalYears": 4,
      "fields-6": 1,
      "waterworks-8": 3,
      "fields-1": 1,
      "waterworks-5": 1,
      "waterworks-7": 1
    },
    "11": {
      "total": 11,
      "totalYears": 3,
      "fields-2": 2,
      "fields-5": 2,
      "waterworks-5": 1,
      "fields-3": 2,
      "waterworks-1": 2,
      "fields-6": 1,
      "waterworks-7": 1
    },
    "12": {
      "total": 17,
      "totalYears": 4,
      "fields-1": 2,
      "fields-2": 3,
      "fields-3": 1,
      "fields-4": 2,
      "fields-5": 2,
      "fields-6": 2,
      "waterworks-6": 1,
      "waterworks-4": 2,
      "waterworks-5": 1,
      "waterworks-8": 1
    },
    "08": {
      "total": 3,
      "totalYears": 3,
      "waterworks-2": 1,
      "fields-1": 1,
      "waterworks-7": 1
    },
    "01": {
      "total": 19,
      "totalYears": 4,
      "fields-1": 2,
      "fields-2": 3,
      "waterworks-3": 1,
      "waterworks-8": 1,
      "fields-4": 1,
      "fields-5": 3,
      "waterworks-4": 2,
      "waterworks-7": 1,
      "fields-3": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-5": 1,
      "waterworks-6": 1
    },
    "09": {
      "total": 5,
      "totalYears": 4,
      "waterworks-8": 1,
      "waterworks-1": 1,
      "fields-2": 1,
      "fields-3": 1,
      "fields-6": 1
    },
    "07": {
      "total": 6,
      "totalYears": 3,
      "waterworks-8": 2,
      "fields-1": 1,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-7": 1
    },
    "04": {
      "total": 5,
      "totalYears": 3,
      "waterworks-4": 1,
      "fields-2": 1,
      "waterworks-3": 1,
      "waterworks-8": 1,
      "fields-1": 1
    },
    "06": {
      "total": 5,
      "totalYears": 3,
      "fields-5": 1,
      "waterworks-7": 2,
      "fields-1": 1,
      "waterworks-4": 1
    },
    "05": {
      "total": 3,
      "totalYears": 2,
      "waterworks-1": 1,
      "waterworks-8": 1,
      "waterworks-7": 1
    },
    "03": {
      "total": 5,
      "totalYears": 1,
      "fields-1": 1,
      "fields-5": 1,
      "waterworks-1": 1,
      "waterworks-4": 1,
      "waterworks-8": 1
    },
    "02": {
      "total": 8,
      "totalYears": 2,
      "fields-3": 1,
      "waterworks-3": 1,
      "fields-1": 1,
      "fields-5": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-4": 1,
      "waterworks-5": 1
    }
  },
  "Green Woodpecker": {
    "10": {
      "total": 2,
      "totalYears": 2,
      "waterworks-8": 1,
      "waterworks-1": 1
    },
    "11": {
      "total": 2,
      "totalYears": 2,
      "waterworks-8": 2
    },
    "12": {
      "total": 2,
      "totalYears": 2,
      "waterworks-1": 2
    },
    "08": {
      "total": 3,
      "totalYears": 1,
      "waterworks-1": 1,
      "waterworks-4": 1,
      "waterworks-6": 1
    },
    "01": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 2
    },
    "09": {
      "total": 4,
      "totalYears": 3,
      "fields-3": 1,
      "waterworks-2": 1,
      "waterworks-8": 1,
      "waterworks-7": 1
    },
    "06": {
      "total": 4,
      "totalYears": 3,
      "waterworks-4": 1,
      "waterworks-1": 2,
      "fields-4": 1
    },
    "04": {
      "total": 1,
      "totalYears": 1,
      "fields-2": 1
    }
  },
  "Kingfisher": {
    "10": {
      "total": 4,
      "totalYears": 3,
      "fields-3": 2,
      "fields-4": 2
    },
    "11": {
      "total": 2,
      "totalYears": 2,
      "fields-3": 2
    },
    "12": {
      "total": 2,
      "totalYears": 2,
      "fields-4": 2
    },
    "08": {
      "total": 3,
      "totalYears": 3,
      "waterworks-4": 1,
      "fields-3": 1,
      "fields-4": 1
    },
    "09": {
      "total": 3,
      "totalYears": 2,
      "waterworks-4": 2,
      "fields-3": 1
    },
    "04": {
      "total": 2,
      "totalYears": 2,
      "fields-3": 1,
      "fields-4": 1
    },
    "01": {
      "total": 3,
      "totalYears": 2,
      "waterworks-4": 2,
      "waterworks-5": 1
    },
    "07": {
      "total": 3,
      "totalYears": 3,
      "fields-3": 1,
      "fields-4": 1,
      "waterworks-4": 1
    },
    "06": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 1,
      "waterworks-7": 1
    },
    "05": {
      "total": 1,
      "totalYears": 1,
      "fields-1": 1
    },
    "03": {
      "total": 1,
      "totalYears": 1,
      "fields-3": 1
    }
  },
  "Reed Warbler": {
    "08": {
      "total": 9,
      "totalYears": 3,
      "waterworks-1": 1,
      "waterworks-3": 1,
      "waterworks-4": 3,
      "waterworks-5": 2,
      "waterworks-7": 2
    },
    "09": {
      "total": 3,
      "totalYears": 3,
      "waterworks-5": 1,
      "waterworks-4": 2
    },
    "07": {
      "total": 17,
      "totalYears": 4,
      "waterworks-4": 4,
      "waterworks-5": 4,
      "waterworks-7": 4,
      "waterworks-8": 2,
      "waterworks-3": 1,
      "waterworks-1": 1,
      "waterworks-2": 1
    },
    "06": {
      "total": 13,
      "totalYears": 4,
      "waterworks-4": 4,
      "waterworks-5": 4,
      "waterworks-6": 1,
      "waterworks-7": 4
    },
    "05": {
      "total": 9,
      "totalYears": 3,
      "waterworks-4": 3,
      "waterworks-5": 2,
      "waterworks-7": 3,
      "waterworks-3": 1
    },
    "04": {
      "total": 6,
      "totalYears": 2,
      "waterworks-3": 1,
      "waterworks-4": 2,
      "waterworks-5": 1,
      "waterworks-7": 2
    }
  },
  "Cetti's Warbler": {
    "10": {
      "total": 19,
      "totalYears": 4,
      "fields-3": 2,
      "waterworks-2": 2,
      "waterworks-4": 4,
      "waterworks-8": 2,
      "waterworks-1": 3,
      "waterworks-3": 2,
      "waterworks-7": 2,
      "fields-5": 1,
      "waterworks-5": 1
    },
    "11": {
      "total": 10,
      "totalYears": 3,
      "waterworks-2": 2,
      "waterworks-4": 3,
      "waterworks-7": 2,
      "waterworks-8": 1,
      "fields-2": 1,
      "waterworks-3": 1
    },
    "12": {
      "total": 5,
      "totalYears": 3,
      "waterworks-4": 3,
      "waterworks-5": 1,
      "waterworks-7": 1
    },
    "08": {
      "total": 9,
      "totalYears": 3,
      "waterworks-4": 3,
      "waterworks-5": 3,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-6": 1
    },
    "01": {
      "total": 8,
      "totalYears": 4,
      "waterworks-4": 4,
      "waterworks-8": 1,
      "waterworks-3": 2,
      "waterworks-7": 1
    },
    "09": {
      "total": 15,
      "totalYears": 4,
      "fields-3": 1,
      "fields-4": 1,
      "waterworks-3": 3,
      "waterworks-4": 4,
      "waterworks-6": 1,
      "waterworks-7": 3,
      "waterworks-1": 1,
      "waterworks-2": 1
    },
    "07": {
      "total": 9,
      "totalYears": 4,
      "waterworks-4": 4,
      "waterworks-5": 1,
      "waterworks-6": 1,
      "waterworks-7": 1,
      "waterworks-8": 1,
      "waterworks-2": 1
    },
    "06": {
      "total": 16,
      "totalYears": 4,
      "waterworks-3": 2,
      "waterworks-4": 4,
      "waterworks-7": 2,
      "waterworks-1": 2,
      "waterworks-8": 2,
      "fields-1": 1,
      "fields-3": 1,
      "waterworks-2": 1,
      "waterworks-5": 1
    },
    "05": {
      "total": 22,
      "totalYears": 3,
      "fields-1": 1,
      "fields-3": 2,
      "waterworks-2": 1,
      "waterworks-3": 2,
      "waterworks-4": 3,
      "waterworks-5": 1,
      "waterworks-8": 3,
      "waterworks-1": 2,
      "waterworks-6": 2,
      "waterworks-7": 2,
      "fields-2": 1,
      "fields-4": 1,
      "fields-5": 1
    },
    "04": {
      "total": 13,
      "totalYears": 3,
      "waterworks-2": 2,
      "waterworks-3": 2,
      "waterworks-4": 3,
      "waterworks-6": 1,
      "waterworks-7": 2,
      "waterworks-8": 1,
      "fields-3": 1,
      "waterworks-1": 1
    },
    "03": {
      "total": 4,
      "totalYears": 1,
      "waterworks-2": 1,
      "waterworks-4": 1,
      "waterworks-6": 1,
      "waterworks-7": 1
    },
    "02": {
      "total": 7,
      "totalYears": 2,
      "waterworks-3": 1,
      "waterworks-4": 2,
      "fields-1": 1,
      "waterworks-1": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    }
  },
  "Whitethroat": {
    "08": {
      "total": 5,
      "totalYears": 3,
      "waterworks-5": 1,
      "waterworks-7": 1,
      "waterworks-8": 1,
      "waterworks-1": 1,
      "waterworks-4": 1
    },
    "07": {
      "total": 18,
      "totalYears": 4,
      "waterworks-7": 2,
      "waterworks-8": 1,
      "fields-3": 1,
      "fields-5": 1,
      "waterworks-1": 2,
      "waterworks-3": 2,
      "waterworks-4": 1,
      "waterworks-5": 2,
      "fields-1": 2,
      "fields-2": 2,
      "waterworks-2": 1,
      "waterworks-6": 1
    },
    "06": {
      "total": 17,
      "totalYears": 4,
      "fields-2": 3,
      "waterworks-1": 3,
      "waterworks-7": 3,
      "fields-3": 1,
      "fields-5": 1,
      "fields-6": 1,
      "waterworks-5": 1,
      "waterworks-8": 2,
      "fields-1": 1,
      "waterworks-3": 1
    },
    "05": {
      "total": 17,
      "totalYears": 3,
      "fields-1": 3,
      "fields-2": 2,
      "waterworks-1": 3,
      "waterworks-7": 2,
      "fields-3": 2,
      "fields-5": 2,
      "waterworks-8": 2,
      "waterworks-4": 1
    },
    "04": {
      "total": 1,
      "totalYears": 1,
      "waterworks-3": 1
    }
  },
  "Pied Wagtail": {
    "10": {
      "total": 8,
      "totalYears": 4,
      "fields-5": 1,
      "fields-1": 2,
      "waterworks-1": 2,
      "waterworks-2": 1,
      "waterworks-8": 1,
      "fields-6": 1
    },
    "11": {
      "total": 7,
      "totalYears": 3,
      "waterworks-1": 2,
      "waterworks-5": 1,
      "waterworks-7": 1,
      "fields-2": 1,
      "fields-1": 1,
      "fields-4": 1
    },
    "12": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 1,
      "fields-2": 1
    },
    "08": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "09": {
      "total": 2,
      "totalYears": 1,
      "fields-2": 1,
      "fields-6": 1
    },
    "05": {
      "total": 1,
      "totalYears": 1,
      "fields-1": 1
    },
    "03": {
      "total": 1,
      "totalYears": 1,
      "waterworks-2": 1
    },
    "02": {
      "total": 2,
      "totalYears": 2,
      "fields-6": 1,
      "fields-1": 1
    },
    "01": {
      "total": 1,
      "totalYears": 1,
      "waterworks-6": 1
    }
  },
  "Chaffinch": {
    "10": {
      "total": 18,
      "totalYears": 4,
      "fields-3": 2,
      "waterworks-7": 3,
      "waterworks-8": 3,
      "fields-1": 1,
      "waterworks-1": 3,
      "waterworks-3": 1,
      "waterworks-6": 2,
      "fields-5": 1,
      "waterworks-2": 1,
      "waterworks-4": 1
    },
    "11": {
      "total": 9,
      "totalYears": 2,
      "fields-1": 2,
      "waterworks-1": 1,
      "waterworks-4": 2,
      "waterworks-7": 2,
      "waterworks-8": 2
    },
    "12": {
      "total": 9,
      "totalYears": 3,
      "fields-4": 1,
      "waterworks-3": 3,
      "waterworks-4": 2,
      "fields-1": 1,
      "waterworks-1": 1,
      "waterworks-5": 1
    },
    "08": {
      "total": 3,
      "totalYears": 2,
      "waterworks-7": 2,
      "waterworks-8": 1
    },
    "01": {
      "total": 5,
      "totalYears": 2,
      "waterworks-1": 1,
      "waterworks-4": 1,
      "waterworks-5": 1,
      "fields-6": 1,
      "waterworks-7": 1
    },
    "09": {
      "total": 3,
      "totalYears": 2,
      "waterworks-2": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    },
    "04": {
      "total": 6,
      "totalYears": 3,
      "fields-2": 1,
      "waterworks-6": 2,
      "waterworks-1": 2,
      "waterworks-2": 1
    },
    "05": {
      "total": 2,
      "totalYears": 2,
      "fields-1": 2
    },
    "03": {
      "total": 2,
      "totalYears": 1,
      "fields-5": 1,
      "waterworks-8": 1
    },
    "07": {
      "total": 1,
      "totalYears": 1,
      "waterworks-7": 1
    },
    "02": {
      "total": 3,
      "totalYears": 2,
      "fields-1": 1,
      "waterworks-7": 2
    }
  },
  "Greenfinch": {
    "10": {
      "total": 8,
      "totalYears": 4,
      "waterworks-4": 1,
      "waterworks-1": 3,
      "waterworks-5": 1,
      "waterworks-8": 1,
      "fields-3": 1,
      "waterworks-7": 1
    },
    "11": {
      "total": 3,
      "totalYears": 2,
      "waterworks-3": 1,
      "waterworks-1": 1,
      "waterworks-5": 1
    },
    "12": {
      "total": 2,
      "totalYears": 2,
      "waterworks-2": 1,
      "waterworks-3": 1
    },
    "08": {
      "total": 8,
      "totalYears": 2,
      "waterworks-1": 2,
      "waterworks-3": 2,
      "waterworks-4": 1,
      "waterworks-6": 1,
      "waterworks-8": 2
    },
    "09": {
      "total": 5,
      "totalYears": 4,
      "waterworks-7": 1,
      "waterworks-1": 2,
      "fields-3": 1,
      "fields-5": 1
    },
    "07": {
      "total": 24,
      "totalYears": 4,
      "fields-3": 2,
      "waterworks-1": 3,
      "waterworks-3": 2,
      "waterworks-4": 2,
      "waterworks-7": 3,
      "waterworks-8": 2,
      "fields-2": 3,
      "fields-5": 1,
      "waterworks-2": 1,
      "waterworks-5": 2,
      "fields-1": 1,
      "fields-4": 1,
      "fields-6": 1
    },
    "06": {
      "total": 16,
      "totalYears": 4,
      "fields-3": 2,
      "waterworks-3": 1,
      "waterworks-7": 2,
      "fields-1": 2,
      "waterworks-1": 2,
      "waterworks-4": 1,
      "waterworks-8": 3,
      "fields-4": 2,
      "waterworks-2": 1
    },
    "04": {
      "total": 12,
      "totalYears": 3,
      "waterworks-1": 3,
      "fields-2": 1,
      "fields-3": 1,
      "waterworks-2": 2,
      "waterworks-7": 2,
      "waterworks-8": 2,
      "waterworks-4": 1
    },
    "01": {
      "total": 2,
      "totalYears": 2,
      "fields-5": 1,
      "waterworks-7": 1
    },
    "05": {
      "total": 11,
      "totalYears": 2,
      "fields-1": 2,
      "fields-6": 1,
      "waterworks-3": 2,
      "waterworks-4": 1,
      "waterworks-8": 2,
      "fields-3": 1,
      "fields-4": 1,
      "waterworks-7": 1
    },
    "03": {
      "total": 7,
      "totalYears": 1,
      "fields-1": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-3": 1,
      "waterworks-4": 1,
      "waterworks-7": 1
    },
    "02": {
      "total": 11,
      "totalYears": 2,
      "fields-1": 2,
      "waterworks-1": 2,
      "waterworks-2": 2,
      "waterworks-4": 1,
      "waterworks-6": 1,
      "waterworks-7": 1,
      "waterworks-8": 1,
      "fields-6": 1
    }
  },
  "Mallard": {
    "10": {
      "total": 10,
      "totalYears": 4,
      "fields-4": 4,
      "waterworks-1": 1,
      "fields-3": 2,
      "waterworks-7": 2,
      "waterworks-4": 1
    },
    "11": {
      "total": 7,
      "totalYears": 3,
      "fields-3": 1,
      "fields-4": 3,
      "waterworks-1": 1,
      "waterworks-7": 1,
      "waterworks-4": 1
    },
    "12": {
      "total": 10,
      "totalYears": 4,
      "fields-3": 4,
      "fields-4": 4,
      "waterworks-1": 1,
      "waterworks-4": 1
    },
    "01": {
      "total": 9,
      "totalYears": 4,
      "fields-4": 4,
      "fields-2": 1,
      "fields-3": 1,
      "waterworks-1": 1,
      "waterworks-4": 2
    },
    "09": {
      "total": 15,
      "totalYears": 4,
      "fields-4": 4,
      "waterworks-1": 3,
      "waterworks-4": 3,
      "waterworks-7": 2,
      "fields-3": 2,
      "fields-1": 1
    },
    "07": {
      "total": 7,
      "totalYears": 4,
      "fields-4": 4,
      "waterworks-1": 1,
      "waterworks-4": 2
    },
    "06": {
      "total": 9,
      "totalYears": 4,
      "fields-4": 4,
      "waterworks-1": 3,
      "fields-1": 1,
      "fields-3": 1
    },
    "05": {
      "total": 14,
      "totalYears": 3,
      "fields-1": 2,
      "fields-3": 1,
      "fields-4": 3,
      "waterworks-1": 3,
      "waterworks-4": 3,
      "waterworks-6": 1,
      "fields-6": 1
    },
    "04": {
      "total": 12,
      "totalYears": 3,
      "fields-4": 3,
      "waterworks-1": 2,
      "waterworks-2": 1,
      "waterworks-4": 2,
      "fields-2": 2,
      "fields-5": 1,
      "waterworks-7": 1
    },
    "03": {
      "total": 2,
      "totalYears": 1,
      "fields-4": 1,
      "waterworks-4": 1
    },
    "08": {
      "total": 6,
      "totalYears": 2,
      "fields-4": 2,
      "waterworks-1": 1,
      "waterworks-4": 2,
      "waterworks-7": 1
    },
    "02": {
      "total": 9,
      "totalYears": 2,
      "fields-3": 2,
      "waterworks-1": 2,
      "waterworks-4": 2,
      "waterworks-7": 1,
      "fields-1": 1,
      "waterworks-2": 1
    }
  },
  "Peregrine": {
    "10": {
      "total": 1,
      "totalYears": 1,
      "waterworks-1": 1
    },
    "11": {
      "total": 1,
      "totalYears": 1,
      "fields-2": 1
    },
    "12": {
      "total": 1,
      "totalYears": 1,
      "fields-1": 1
    },
    "01": {
      "total": 4,
      "totalYears": 4,
      "fields-2": 1,
      "fields-1": 1,
      "fields-5": 2
    },
    "03": {
      "total": 1,
      "totalYears": 1,
      "waterworks-3": 1
    },
    "02": {
      "total": 2,
      "totalYears": 2,
      "fields-2": 1,
      "waterworks-1": 1
    }
  },
  "Gadwall": {
    "10": {
      "total": 8,
      "totalYears": 4,
      "waterworks-4": 4,
      "waterworks-7": 2,
      "fields-3": 1,
      "fields-4": 1
    },
    "11": {
      "total": 3,
      "totalYears": 3,
      "waterworks-4": 3
    },
    "12": {
      "total": 5,
      "totalYears": 4,
      "fields-4": 2,
      "waterworks-4": 3
    },
    "01": {
      "total": 4,
      "totalYears": 3,
      "waterworks-7": 1,
      "waterworks-4": 2,
      "fields-4": 1
    },
    "09": {
      "total": 3,
      "totalYears": 3,
      "waterworks-4": 3
    },
    "05": {
      "total": 2,
      "totalYears": 2,
      "waterworks-7": 1,
      "fields-4": 1
    },
    "04": {
      "total": 1,
      "totalYears": 1,
      "fields-4": 1
    },
    "03": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "06": {
      "total": 1,
      "totalYears": 1,
      "fields-4": 1
    },
    "02": {
      "total": 2,
      "totalYears": 2,
      "fields-4": 1,
      "waterworks-4": 1
    },
    "08": {
      "total": 2,
      "totalYears": 1,
      "fields-4": 1,
      "waterworks-7": 1
    }
  },
  "Pochard": {
    "11": {
      "total": 3,
      "totalYears": 3,
      "waterworks-4": 3
    },
    "12": {
      "total": 3,
      "totalYears": 3,
      "waterworks-4": 3
    },
    "01": {
      "total": 2,
      "totalYears": 2,
      "waterworks-7": 1,
      "waterworks-4": 1
    },
    "05": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 2
    },
    "04": {
      "total": 3,
      "totalYears": 3,
      "waterworks-4": 3
    },
    "07": {
      "total": 4,
      "totalYears": 3,
      "waterworks-4": 3,
      "waterworks-7": 1
    },
    "03": {
      "total": 2,
      "totalYears": 1,
      "waterworks-4": 1,
      "waterworks-7": 1
    },
    "06": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 2
    },
    "02": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 2
    },
    "09": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "08": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    }
  },
  "Common Gull": {
    "11": {
      "total": 5,
      "totalYears": 3,
      "fields-2": 1,
      "fields-6": 1,
      "waterworks-7": 1,
      "waterworks-8": 1,
      "fields-3": 1
    },
    "12": {
      "total": 13,
      "totalYears": 4,
      "fields-2": 4,
      "fields-4": 3,
      "waterworks-8": 1,
      "waterworks-3": 1,
      "fields-5": 2,
      "fields-1": 1,
      "waterworks-4": 1
    },
    "01": {
      "total": 7,
      "totalYears": 4,
      "waterworks-8": 1,
      "fields-3": 1,
      "waterworks-3": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "fields-1": 1,
      "waterworks-6": 1
    },
    "03": {
      "total": 3,
      "totalYears": 1,
      "waterworks-4": 1,
      "waterworks-6": 1,
      "waterworks-7": 1
    },
    "02": {
      "total": 9,
      "totalYears": 2,
      "fields-2": 2,
      "waterworks-7": 1,
      "fields-3": 1,
      "fields-4": 1,
      "fields-6": 1,
      "waterworks-1": 1,
      "waterworks-2": 1,
      "waterworks-3": 1
    }
  },
  "Bittern": {
    "01": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    }
  },
  "Goldcrest": {
    "10": {
      "total": 10,
      "totalYears": 4,
      "fields-1": 1,
      "fields-3": 2,
      "fields-4": 1,
      "waterworks-2": 3,
      "waterworks-8": 1,
      "waterworks-1": 1,
      "waterworks-7": 1
    },
    "11": {
      "total": 8,
      "totalYears": 3,
      "waterworks-5": 1,
      "waterworks-7": 1,
      "waterworks-8": 1,
      "fields-1": 2,
      "waterworks-1": 1,
      "fields-4": 1,
      "waterworks-4": 1
    },
    "12": {
      "total": 5,
      "totalYears": 3,
      "waterworks-2": 3,
      "waterworks-7": 1,
      "waterworks-5": 1
    },
    "01": {
      "total": 7,
      "totalYears": 4,
      "waterworks-2": 3,
      "waterworks-7": 1,
      "waterworks-8": 2,
      "waterworks-6": 1
    },
    "02": {
      "total": 4,
      "totalYears": 2,
      "waterworks-7": 2,
      "fields-3": 1,
      "waterworks-8": 1
    }
  },
  "Mute Swan": {
    "10": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "11": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "12": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 2
    },
    "09": {
      "total": 1,
      "totalYears": 1,
      "fields-4": 1
    },
    "05": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 2
    },
    "03": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "04": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "06": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "07": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "02": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "01": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    }
  },
  "Water Rail": {
    "12": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 2
    },
    "02": {
      "total": 2,
      "totalYears": 2,
      "waterworks-7": 1,
      "waterworks-4": 1
    },
    "01": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    }
  },
  "Little Egret": {
    "10": {
      "total": 5,
      "totalYears": 3,
      "fields-3": 2,
      "fields-4": 2,
      "waterworks-7": 1
    },
    "12": {
      "total": 2,
      "totalYears": 2,
      "waterworks-1": 1,
      "fields-3": 1
    },
    "09": {
      "total": 6,
      "totalYears": 4,
      "fields-4": 3,
      "fields-3": 1,
      "waterworks-7": 1,
      "waterworks-1": 1
    },
    "07": {
      "total": 2,
      "totalYears": 2,
      "fields-4": 1,
      "fields-5": 1
    },
    "06": {
      "total": 3,
      "totalYears": 2,
      "fields-1": 1,
      "waterworks-8": 2
    },
    "04": {
      "total": 3,
      "totalYears": 1,
      "fields-3": 1,
      "fields-4": 1,
      "waterworks-8": 1
    },
    "08": {
      "total": 2,
      "totalYears": 2,
      "fields-4": 1,
      "fields-3": 1
    },
    "01": {
      "total": 1,
      "totalYears": 1,
      "fields-4": 1
    }
  },
  "Raven": {
    "12": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    }
  },
  "Egyptian Goose": {
    "10": {
      "total": 2,
      "totalYears": 1,
      "fields-4": 1,
      "fields-5": 1
    },
    "05": {
      "total": 1,
      "totalYears": 1,
      "fields-4": 1
    },
    "04": {
      "total": 1,
      "totalYears": 1,
      "waterworks-1": 1
    },
    "08": {
      "total": 2,
      "totalYears": 2,
      "fields-4": 2
    }
  },
  "Grey Heron": {
    "10": {
      "total": 5,
      "totalYears": 4,
      "fields-3": 2,
      "fields-4": 2,
      "waterworks-7": 1
    },
    "11": {
      "total": 3,
      "totalYears": 1,
      "fields-1": 1,
      "waterworks-1": 1,
      "waterworks-4": 1
    },
    "12": {
      "total": 1,
      "totalYears": 1,
      "fields-3": 1
    },
    "07": {
      "total": 6,
      "totalYears": 4,
      "waterworks-4": 1,
      "fields-4": 1,
      "fields-3": 1,
      "waterworks-2": 1,
      "waterworks-7": 1,
      "waterworks-5": 1
    },
    "04": {
      "total": 4,
      "totalYears": 2,
      "fields-4": 2,
      "fields-3": 1,
      "waterworks-7": 1
    },
    "09": {
      "total": 4,
      "totalYears": 3,
      "fields-4": 2,
      "waterworks-4": 1,
      "waterworks-7": 1
    },
    "05": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    },
    "03": {
      "total": 1,
      "totalYears": 1,
      "waterworks-5": 1
    },
    "06": {
      "total": 3,
      "totalYears": 2,
      "fields-1": 2,
      "waterworks-4": 1
    },
    "08": {
      "total": 1,
      "totalYears": 1,
      "fields-3": 1
    },
    "01": {
      "total": 1,
      "totalYears": 1,
      "waterworks-3": 1
    }
  },
  "Shoveler": {
    "10": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 1,
      "waterworks-7": 1
    },
    "01": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "02": {
      "total": 1,
      "totalYears": 1,
      "waterworks-7": 1
    }
  },
  "Sparrowhawk": {
    "10": {
      "total": 4,
      "totalYears": 3,
      "waterworks-4": 1,
      "waterworks-3": 1,
      "waterworks-2": 1,
      "waterworks-8": 1
    },
    "11": {
      "total": 3,
      "totalYears": 2,
      "fields-3": 1,
      "waterworks-8": 1,
      "waterworks-4": 1
    },
    "12": {
      "total": 1,
      "totalYears": 1,
      "fields-4": 1
    },
    "05": {
      "total": 1,
      "totalYears": 1,
      "waterworks-2": 1
    },
    "04": {
      "total": 3,
      "totalYears": 3,
      "waterworks-4": 1,
      "waterworks-3": 1,
      "waterworks-1": 1
    },
    "09": {
      "total": 2,
      "totalYears": 2,
      "waterworks-6": 1,
      "waterworks-1": 1
    },
    "07": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 1,
      "waterworks-8": 1
    },
    "06": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    },
    "01": {
      "total": 3,
      "totalYears": 2,
      "fields-2": 1,
      "waterworks-4": 1,
      "waterworks-2": 1
    },
    "08": {
      "total": 2,
      "totalYears": 1,
      "fields-3": 1,
      "waterworks-3": 1
    },
    "02": {
      "total": 1,
      "totalYears": 1,
      "waterworks-5": 1
    }
  },
  "Meadow Pipit": {
    "10": {
      "total": 7,
      "totalYears": 3,
      "waterworks-1": 2,
      "waterworks-4": 1,
      "waterworks-3": 1,
      "waterworks-7": 2,
      "waterworks-8": 1
    },
    "11": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    },
    "09": {
      "total": 2,
      "totalYears": 2,
      "fields-6": 1,
      "waterworks-7": 1
    },
    "01": {
      "total": 1,
      "totalYears": 1,
      "fields-2": 1
    }
  },
  "Willow Warbler": {
    "09": {
      "total": 1,
      "totalYears": 1,
      "waterworks-5": 1
    },
    "04": {
      "total": 4,
      "totalYears": 3,
      "waterworks-2": 1,
      "waterworks-8": 2,
      "waterworks-1": 1
    }
  },
  "Starling": {
    "10": {
      "total": 1,
      "totalYears": 1,
      "fields-1": 1
    },
    "12": {
      "total": 1,
      "totalYears": 1,
      "fields-4": 1
    },
    "09": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    },
    "06": {
      "total": 3,
      "totalYears": 3,
      "fields-1": 1,
      "waterworks-6": 1,
      "waterworks-8": 1
    },
    "01": {
      "total": 1,
      "totalYears": 1,
      "waterworks-6": 1
    }
  },
  "House Martin": {
    "07": {
      "total": 2,
      "totalYears": 2,
      "fields-4": 1,
      "fields-5": 1
    },
    "09": {
      "total": 1,
      "totalYears": 1,
      "waterworks-5": 1
    }
  },
  "Lesser Whitethroat": {
    "07": {
      "total": 2,
      "totalYears": 2,
      "waterworks-8": 2
    },
    "06": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 1,
      "waterworks-8": 1
    },
    "05": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    },
    "08": {
      "total": 1,
      "totalYears": 1,
      "waterworks-1": 1
    }
  },
  "House Sparrow": {
    "07": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    },
    "03": {
      "total": 1,
      "totalYears": 1,
      "fields-6": 1
    }
  },
  "Linnet": {
    "11": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "12": {
      "total": 1,
      "totalYears": 1,
      "waterworks-3": 1
    },
    "07": {
      "total": 2,
      "totalYears": 2,
      "waterworks-1": 1,
      "fields-3": 1
    },
    "06": {
      "total": 1,
      "totalYears": 1,
      "fields-4": 1
    },
    "05": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    }
  },
  "Garden Warbler": {
    "06": {
      "total": 6,
      "totalYears": 4,
      "fields-1": 3,
      "fields-3": 1,
      "waterworks-8": 1,
      "waterworks-7": 1
    },
    "05": {
      "total": 6,
      "totalYears": 3,
      "fields-1": 2,
      "waterworks-7": 1,
      "waterworks-8": 3
    },
    "07": {
      "total": 2,
      "totalYears": 2,
      "waterworks-8": 2
    }
  },
  "Mistle Thrush": {
    "10": {
      "total": 1,
      "totalYears": 1,
      "fields-3": 1
    },
    "06": {
      "total": 1,
      "totalYears": 1,
      "fields-3": 1
    }
  },
  "Collared Dove": {
    "05": {
      "total": 4,
      "totalYears": 3,
      "fields-6": 1,
      "waterworks-8": 1,
      "fields-1": 1,
      "waterworks-2": 1
    },
    "06": {
      "total": 4,
      "totalYears": 3,
      "waterworks-5": 1,
      "waterworks-1": 1,
      "waterworks-8": 1,
      "fields-1": 1
    },
    "04": {
      "total": 3,
      "totalYears": 2,
      "fields-5": 1,
      "waterworks-8": 2
    },
    "07": {
      "total": 2,
      "totalYears": 2,
      "waterworks-1": 1,
      "fields-6": 1
    },
    "08": {
      "total": 1,
      "totalYears": 1,
      "waterworks-1": 1
    },
    "02": {
      "total": 1,
      "totalYears": 1,
      "fields-1": 1
    }
  },
  "Sand Martin": {
    "05": {
      "total": 4,
      "totalYears": 3,
      "fields-6": 1,
      "waterworks-4": 1,
      "waterworks-8": 1,
      "waterworks-6": 1
    },
    "04": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "07": {
      "total": 1,
      "totalYears": 1,
      "waterworks-6": 1
    },
    "08": {
      "total": 2,
      "totalYears": 2,
      "fields-5": 1,
      "waterworks-8": 1
    },
    "06": {
      "total": 1,
      "totalYears": 1,
      "fields-2": 1
    }
  },
  "Reed Bunting": {
    "05": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "04": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    }
  },
  "Tufted Duck": {
    "11": {
      "total": 3,
      "totalYears": 3,
      "waterworks-4": 3
    },
    "12": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    },
    "04": {
      "total": 2,
      "totalYears": 2,
      "waterworks-4": 2
    },
    "01": {
      "total": 3,
      "totalYears": 2,
      "waterworks-4": 2,
      "fields-4": 1
    }
  },
  "Redwing": {
    "10": {
      "total": 5,
      "totalYears": 2,
      "fields-1": 1,
      "waterworks-2": 2,
      "fields-3": 1,
      "waterworks-8": 1
    },
    "11": {
      "total": 6,
      "totalYears": 2,
      "fields-3": 1,
      "waterworks-1": 2,
      "waterworks-2": 1,
      "waterworks-7": 1,
      "waterworks-8": 1
    },
    "12": {
      "total": 7,
      "totalYears": 3,
      "fields-3": 1,
      "fields-2": 2,
      "fields-4": 1,
      "fields-5": 1,
      "waterworks-2": 2
    },
    "01": {
      "total": 12,
      "totalYears": 3,
      "waterworks-1": 2,
      "fields-1": 1,
      "fields-3": 1,
      "waterworks-2": 2,
      "waterworks-3": 2,
      "waterworks-4": 2,
      "waterworks-7": 1,
      "waterworks-6": 1
    },
    "03": {
      "total": 2,
      "totalYears": 1,
      "fields-6": 1,
      "waterworks-2": 1
    },
    "02": {
      "total": 5,
      "totalYears": 2,
      "waterworks-1": 1,
      "waterworks-2": 2,
      "waterworks-7": 1,
      "waterworks-8": 1
    }
  },
  "Kestrel": {
    "10": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    },
    "11": {
      "total": 1,
      "totalYears": 1,
      "fields-2": 1
    },
    "12": {
      "total": 2,
      "totalYears": 2,
      "fields-3": 1,
      "fields-5": 1
    },
    "07": {
      "total": 1,
      "totalYears": 1,
      "fields-2": 1
    },
    "08": {
      "total": 2,
      "totalYears": 2,
      "fields-2": 1,
      "fields-1": 1
    }
  },
  "Greylag Goose": {
    "10": {
      "total": 1,
      "totalYears": 1,
      "fields-1": 1
    },
    "11": {
      "total": 1,
      "totalYears": 1,
      "waterworks-4": 1
    }
  },
  "Lesser Redpoll": {
    "10": {
      "total": 2,
      "totalYears": 1,
      "waterworks-2": 1,
      "waterworks-4": 1
    },
    "11": {
      "total": 3,
      "totalYears": 2,
      "waterworks-2": 1,
      "waterworks-8": 1,
      "fields-1": 1
    }
  },
  "Siskin": {
    "10": {
      "total": 2,
      "totalYears": 2,
      "fields-3": 1,
      "waterworks-8": 1
    },
    "09": {
      "total": 1,
      "totalYears": 1,
      "waterworks-2": 1
    }
  },
  "Great spotted woodpecker": {
    "09": {
      "total": 1,
      "totalYears": 1,
      "fields-3": 1
    }
  },
  "Jackdaw": {
    "09": {
      "total": 1,
      "totalYears": 1,
      "fields-3": 1
    },
    "08": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    }
  },
  "Green woodpecker": {
    "09": {
      "total": 2,
      "totalYears": 1,
      "waterworks-1": 1,
      "waterworks-2": 1
    }
  },
  "Hobby": {
    "06": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    }
  },
  "Fieldfare": {
    "11": {
      "total": 2,
      "totalYears": 1,
      "fields-1": 1,
      "waterworks-8": 1
    },
    "12": {
      "total": 3,
      "totalYears": 2,
      "fields-2": 2,
      "fields-5": 1
    },
    "02": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    }
  },
  "Peregrine Falcon": {
    "10": {
      "total": 1,
      "totalYears": 1,
      "waterworks-1": 1
    },
    "12": {
      "total": 2,
      "totalYears": 2,
      "waterworks-1": 2
    },
    "05": {
      "total": 1,
      "totalYears": 1,
      "waterworks-1": 1
    },
    "01": {
      "total": 1,
      "totalYears": 1,
      "waterworks-1": 1
    }
  },
  "Buzzard": {
    "06": {
      "total": 1,
      "totalYears": 1,
      "waterworks-6": 1
    }
  },
  "Common Sandpiper": {
    "07": {
      "total": 1,
      "totalYears": 1,
      "fields-4": 1
    }
  },
  "Great Black-Backed Gull": {
    "10": {
      "total": 1,
      "totalYears": 1,
      "fields-1": 1
    },
    "12": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    },
    "02": {
      "total": 1,
      "totalYears": 1,
      "fields-2": 1
    }
  },
  "Common Tern": {
    "07": {
      "total": 1,
      "totalYears": 1,
      "waterworks-8": 1
    }
  }
}
