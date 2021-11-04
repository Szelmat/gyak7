export class WeaponEnchanter {
    enchant(enchantment) {
        if(enchantment == 'water')
            this.enchantWithWater();
        else if(enchantment == 'fire')
            this.enchantWithFire();
        else if(enchantment == 'air')
            this.enchantWithAir();
        else
            this.enchantWithEarth();
            
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
