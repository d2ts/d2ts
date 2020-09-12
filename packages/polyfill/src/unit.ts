if (!Unit.prototype.inTown) {
  Object.defineProperty(Unit.prototype, 'inTown', {
    get(): boolean {
      return [1, 40, 75, 103, 109].includes(this.area)
    },
  })
}
