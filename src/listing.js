const imageBase = 'https://dyn-images.triplemint.com/production/images/unit/'

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

  get surface () {
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

  get region () {
    return this._data.unit.building.region.text
  }

  get listedDate () {
    return Date.parse(this._data.listed_date)
  }

  get days () {
    const today = new Date()
    const listed = Date.parse(this._data.listed_date)

    return (today.getTime() - listed) / (1000 * 3600 * 24)
  }

  get image () {
    const image = this._data.unit.dyn_images[0] || this._data.unit.building.dyn_images[0] || this._data.unit.dyn_floorplans[0]
    return `${imageBase}${this._data.unit.id}/x486/${image.key}.${image.extension}`
  }

  get floorplan () {
    const image = this._data.unit.dyn_floorplans[0]

    if (!image) {
      return
    }

    return `${imageBase}${this._data.unit.id}/x486/${image.key}.${image.extension}`
  }
}
