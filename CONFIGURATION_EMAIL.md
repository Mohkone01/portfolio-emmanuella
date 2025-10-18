# Configuration EmailJS pour le Portfolio

## 📧 Configuration requise pour l'envoi d'emails

Le formulaire de contact est configuré pour utiliser **EmailJS** pour l'envoi d'emails vers `emmanuellabde@gmail.com`.

### 🔧 Étapes de configuration :

#### 1. Créer un compte EmailJS
- Aller sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Créer un compte gratuit
- Confirmer l'email

#### 2. Configurer le service email
- Dans le dashboard EmailJS, aller dans "Email Services"
- Ajouter un service Gmail
- Connecter le compte `emmanuellabde@gmail.com`
- Noter le **Service ID** (ex: `service_portfolio`)

#### 3. Créer un template d'email
- Aller dans "Email Templates"
- Créer un nouveau template avec le contenu suivant :

```
Sujet: Nouveau message de soutien - Portfolio Emmanuella

Bonjour Emmanuella,

Vous avez reçu un nouveau message de soutien via votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre portfolio de campagne BDE.
```

- Noter le **Template ID** (ex: `template_contact`)

#### 4. Obtenir la clé publique
- Aller dans "Account" > "General"
- Copier la **Public Key**

#### 5. Mettre à jour le code
Dans le fichier `src/components/Contact.js`, remplacer :

```javascript
const EMAILJS_SERVICE_ID = 'service_portfolio';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = 'your_public_key';
```

Par vos vraies valeurs, puis décommenter la ligne :

```javascript
await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
```

Et commenter la ligne de simulation :

```javascript
// await new Promise(resolve => setTimeout(resolve, 2000));
```

### 🔒 Sécurité
- La clé publique peut être exposée côté client
- EmailJS limite automatiquement les envois pour éviter le spam
- Configurez des filtres anti-spam dans les paramètres EmailJS

### 📊 Limites du plan gratuit
- 200 emails/mois
- Suffisant pour un portfolio de campagne

### ✅ Test
Une fois configuré, testez le formulaire pour vérifier que les emails arrivent bien sur `emmanuellabde@gmail.com`.
