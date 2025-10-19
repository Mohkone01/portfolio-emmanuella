# 📧 Configuration EmailJS - Guide Complet

## 🚨 Problème actuel
Le formulaire de contact est en **mode simulation** - les emails ne sont pas réellement envoyés.

## 🛠️ Configuration EmailJS (Gratuit)

### **1. Créer un compte EmailJS**
1. Aller sur https://www.emailjs.com/
2. Cliquer sur "Sign Up" 
3. Créer un compte gratuit (100 emails/mois)

### **2. Configurer le service Gmail**
1. **Dashboard EmailJS** → **Email Services**
2. **Add New Service** → **Gmail**
3. **Se connecter avec Gmail** : `emmanuellabde@gmail.com`
4. **Autoriser EmailJS** à accéder à Gmail
5. **Noter le Service ID** (ex: `service_abc123`)

### **3. Créer un template d'email**
1. **Dashboard** → **Email Templates**
2. **Create New Template**
3. **Configurer le template** :

```html
Subject: Nouveau message de soutien - {{from_name}}

Bonjour Emmanuella,

Vous avez reçu un nouveau message de soutien pour votre campagne BDE :

De: {{from_name}} ({{from_email}})
Message:
{{message}}

---
Envoyé depuis votre portfolio de campagne
```

4. **Test Variables** :
   - `from_name` : Nom de l'expéditeur
   - `from_email` : Email de l'expéditeur  
   - `message` : Message de soutien
   - `to_email` : emmanuellabde@gmail.com

5. **Noter le Template ID** (ex: `template_xyz789`)

### **4. Obtenir la clé publique**
1. **Dashboard** → **Account** → **General**
2. **Copier la Public Key** (ex: `user_abcdef123`)

### **5. Mettre à jour le code**

Remplacer dans `src/components/Contact.js` :

```javascript
// Remplacer ces valeurs par vos vraies clés
const EMAILJS_SERVICE_ID = 'service_abc123';  // Votre Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // Votre Template ID  
const EMAILJS_PUBLIC_KEY = 'user_abcdef123';   // Votre Public Key

// Décommenter cette ligne et supprimer la simulation
await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

// Supprimer cette ligne de simulation
// await new Promise(resolve => setTimeout(resolve, 2000));
```

### **6. Code complet à remplacer**

```javascript
import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ⚠️ REMPLACER PAR VOS VRAIES CLÉS
const EMAILJS_SERVICE_ID = 'VOTRE_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'VOTRE_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'VOTRE_PUBLIC_KEY';

const Contact = () => {
  // ... reste du code identique jusqu'à handleSubmit

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'emmanuellabde@gmail.com',
        reply_to: formData.email
      };

      // ENVOI RÉEL avec EmailJS
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitError('Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou contacter directement emmanuellabde@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... reste du code identique
};
```

## 🔒 Sécurité des clés

### **Option 1 : Variables d'environnement (Recommandé)**
1. Créer `.env.local` dans le dossier racine :
```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=user_abcdef123
```

2. Utiliser dans le code :
```javascript
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
```

3. Ajouter sur Vercel :
   - **Dashboard Vercel** → Votre projet → **Settings** → **Environment Variables**
   - Ajouter les 3 variables

### **Option 2 : Clés directes (Plus simple)**
Remplacer directement dans le code (moins sécurisé mais OK pour ce projet).

## ✅ Test de fonctionnement

1. **Déployer** les modifications
2. **Remplir le formulaire** sur le site
3. **Vérifier Gmail** : `emmanuellabde@gmail.com`
4. **Vérifier les spams** si pas reçu

## 🚨 Dépannage

### **Emails non reçus**
- ✅ Vérifier les **spams/indésirables**
- ✅ Vérifier que Gmail est bien connecté à EmailJS
- ✅ Tester le template dans EmailJS dashboard
- ✅ Vérifier les quotas (100 emails/mois gratuit)

### **Erreurs JavaScript**
- ✅ Vérifier les clés dans la console (F12)
- ✅ Tester en local avec `npm start`
- ✅ Vérifier les variables d'environnement

## 💰 Limites gratuites EmailJS
- **100 emails/mois** gratuits
- **2 services email** max
- **Pas de support prioritaire**

Pour plus d'emails : Plan payant à partir de 15$/mois.

## 🎯 Résultat attendu

Après configuration :
- ✅ **Formulaire fonctionnel** sur le site
- ✅ **Emails reçus** dans `emmanuellabde@gmail.com`
- ✅ **Notifications** de nouveaux soutiens
- ✅ **Réponses possibles** directement depuis Gmail

---

**Temps de configuration : 15-20 minutes** ⏱️
