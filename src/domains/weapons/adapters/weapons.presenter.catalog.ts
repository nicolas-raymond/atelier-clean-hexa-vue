import type { Weapons } from '@/domains/weapons/getAllWeapons.usecase.ts'
import type { WeaponsPresenter } from '@/domains/weapons/ports/weapons.presenter.ts'

export type WeaponsCatalogItemViewModel = {
  title: string
  image: string
  price: number
  addToCartButton: {
    disabled: boolean
    label: string
  }
  strength: number
}
export type WeaponsCatalogViewModel = {
  items: WeaponsCatalogItemViewModel[]
}

export class WeaponsCataloguePresenter implements WeaponsPresenter {
  constructor(
    private readonly callback: (weaponsCatalogViewModel: WeaponsCatalogViewModel) => void,
  ) {}

  present(weapons: Weapons[], amountOfGoldAvailable: number): void {
    this.callback({
      items: weapons.map((w) => ({
        addToCartButton: { disabled: !w.canBuy(amountOfGoldAvailable), label: 'Acheter' },
        image: '/images/' + w.image,
        price: w.price,
        strength: w.strenght,
        title: w.title,
      })),
    })
  }
}
