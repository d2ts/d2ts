type LinkedListPredicate<T> = (node: T) => boolean

export const filter = <T extends LinkedList<T>>(
  node: T,
  predicate: LinkedListPredicate<T>
): T[] => {
  const filteredNodes: T[] = []

  while (node) {
    if (predicate(node)) {
      filteredNodes.push(node)
    }

    node = node.getNext()
  }

  return filteredNodes
}

export const find = <T extends LinkedList<T>>(
  node: T,
  predicate: LinkedListPredicate<T>
): T | undefined => {
  while (node) {
    if (predicate(node)) {
      return node
    }

    node = node.getNext()
  }
}
