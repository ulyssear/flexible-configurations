/**
 * @package ulyssear/flexible-configurations
 * @type {{folder: undefined, get(*, *=): *}} Prototype
 */
module.exports = {

    /**
     * Répertoire utilisé depuis le répertoire racine (supposé)
     */
    folder: undefined,

    /**
     * Récupération de la configuration via le nom
     * Récupère soit une valeur spécifique (e.g "app.name" pour le nom de l'application) ou une collection de valeurs
     * (e.g "app" pour l'ensemble des informations sur l'application.
     * @param name Nom de la configuration
     * @param _default Valeur par défaut (optionnel)
     */
    get(name, _default = undefined) {
        let parts = name.split('.') ?? [name], value = require(`../../${this.folder}/${parts.shift()}`);
        for(let part of parts) {
            try {
                value = value[part];
            }
            catch (e) {
                value = _default ?? undefined;
                break;
            }
        }
        return value;
    }

}