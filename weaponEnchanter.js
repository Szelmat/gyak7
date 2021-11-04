export class WeaponEnchanter {
    enchant(enchantment) {
        if(enchantment === 'water')
            return this.enchantWithWater();
        else if(enchantment === 'fire')
            return this.enchantWithFire();
        else if(enchantment === 'air')
            return this.enchantWithAir();
        else
            return this.enchantWithEarth();     
    }

    enchantWithWater() {
        return 'Enchanter with water';
    }

    enchantWithFire() {
        return 'Enchanted with fire';
    }

    enchantWithEarth() {
        return 'Enchanted with earth';
    }

    enchantWithAir() {
        return 'Enchanted with air';
    }
}
