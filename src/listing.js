function currency(amount) {
  return Number((amount).toFixed(1)).toLocaleString()
}

const imageBase = "https://dyn-images.triplemint.com/production/images/unit/"
export default class Listing {
  constructor (data) {
    this._data = data
  }

  get address () {
    return this._data.address
  }

  get type () {
    return this._data.unit.building.type
  }

  get squareFeet () {
    return this._data.unit.surface ? this._data.unit.surface.toLocaleString() : ''
  }

  get neighborhood () {
    return `${this._data.unit.building.region.address_parts[0]}, ${this._data.unit.building.region.address_parts[1]}`
  }

  get bedrooms () {
    return this._data.unit.bedrooms
  }

  get bathrooms () {
    return this._data.unit.bathrooms
  }

  get price () {
    return this._data.price
  }

  get image () {
    const image = this._data.unit.dyn_images[0] || this._data.unit.building.dyn_images[0] || this._data.unit.dyn_floorplans[0]
    return `${imageBase}${this._data.unit.id}/x486/${image.key}.${image.extension}`
  }

  get floorplan () {
    const image = this._data.unit.dyn_floorplans[0]
    return `${imageBase}${this._data.unit.id}/x486/${image.key}.${image.extension}`
  }
}