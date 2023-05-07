function isFloat(value: any): boolean {
  return typeof value === "number" && Number.isFinite(value) && value % 1 !== 0;
}

export function Merge(
  collection_1: number[],
  collection_2: number[]
): number[] {
  let sorted: number[] = [];
  //============Validate==============//
  try {
    for (let i = 0; i < collection_1.length; i++) {
      if (isFloat(collection_1[i]))
        throw new Error("Array is contain float number"); // Validate Float
      if (collection_1[i] < 0)
        throw new Error("Array is contain negative number"); //Validate Negative
      if (i < collection_1.length - 1) {
        // Validate Sort
        if (collection_1[i] > collection_1[i + 1])
          throw new Error("Array is not sorted");
      }
    }
    for (let i = 0; i < collection_2.length; i++) {
      if (isFloat(collection_2[i]))
        throw new Error("Array is contain float number"); // Validate Float
      if (collection_2[i] < 0)
        throw new Error("Array is contain negative number"); //Validate Negative
      if (i < collection_2.length - 1) {
        // Validate Sort
        if (collection_2[i] > collection_2[i + 1])
          throw new Error("Array is not sorted");
      }
    }
  } catch (err) {
    console.error((err as Error).message)
    return []
  }
  //============Validate==============//

  //===========Merge=Sort============//
  while (collection_1.length && collection_2.length) {
    // Merge Sort
    if (collection_1[0] < collection_2[0]) {
      sorted.push(collection_1.shift()!);
    } else {
      sorted.push(collection_2.shift()!);
    }
  }

  return [...sorted, ...collection_1, ...collection_2];
  //===========Merge=Sort============//
}
