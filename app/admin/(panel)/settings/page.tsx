'use client'
import { useEffect, useState } from 'react'
import { Save, CheckCircle2 } from 'lucide-react'
import type { AdminSettings } from '@/types'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { LOCAL_STORAGE_KEYS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, SITE_NAME, SOCIAL_LINKS } from '@/lib/constants'

const DEFAULTS: AdminSettings = {
  companyName: SITE_NAME,
  logo: '',
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE,
  address: CONTACT_ADDRESS,
  socialLinks: {
    linkedin:  SOCIAL_LINKS.linkedin,
    twitter:   SOCIAL_LINKS.twitter,
    instagram: SOCIAL_LINKS.instagram,
    facebook:  SOCIAL_LINKS.facebook,
    youtube:   SOCIAL_LINKS.youtube,
  },
}

function load(): AdminSettings {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.settings)
    return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : DEFAULTS
  } catch { return DEFAULTS }
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<AdminSettings>(DEFAULTS)
  const [saved, setSaved] = useState(false)

  useEffect(() => { setSettings(load()) }, [])

  function set<K extends keyof AdminSettings>(key: K, value: AdminSettings[K]) {
    setSettings((prev) => ({ ...prev, [key]: value }))
    setSaved(false)
  }

  function setSocial(key: keyof AdminSettings['socialLinks'], value: string) {
    setSettings((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [key]: value },
    }))
    setSaved(false)
  }

  function handleSave() {
    localStorage.setItem(LOCAL_STORAGE_KEYS.settings, JSON.stringify(settings))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-bold text-white mb-1">Settings</h1>
        <p className="text-sm text-white/40">Manage your company information and social links</p>
      </div>

      {/* Company Info */}
      <div className="bg-white/4 border border-white/8 rounded-2xl p-6 mb-6">
        <h2 className="font-semibold text-white mb-5">Company Information</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Company Name"
              value={settings.companyName}
              onChange={(e) => set('companyName', e.target.value)}
            />
            <Input
              label="Logo URL"
              placeholder="https://..."
              value={settings.logo}
              onChange={(e) => set('logo', e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Email Address"
              type="email"
              value={settings.email}
              onChange={(e) => set('email', e.target.value)}
            />
            <Input
              label="Phone Number"
              value={settings.phone}
              onChange={(e) => set('phone', e.target.value)}
            />
          </div>
          <Input
            label="Address"
            value={settings.address}
            onChange={(e) => set('address', e.target.value)}
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white/4 border border-white/8 rounded-2xl p-6 mb-8">
        <h2 className="font-semibold text-white mb-5">Social Media Links</h2>
        <div className="space-y-4">
          {([
            { key: 'linkedin',  label: 'LinkedIn URL' },
            { key: 'twitter',   label: 'X / Twitter URL' },
            { key: 'instagram', label: 'Instagram URL' },
            { key: 'facebook',  label: 'Facebook URL' },
            { key: 'youtube',   label: 'YouTube URL' },
          ] as const).map(({ key, label }) => (
            <Input
              key={key}
              label={label}
              placeholder="https://..."
              value={settings.socialLinks[key] ?? ''}
              onChange={(e) => setSocial(key, e.target.value)}
            />
          ))}
        </div>
      </div>

      {/* Save */}
      <div className="flex items-center gap-4">
        <Button
          variant="glow"
          size="lg"
          icon={saved ? <CheckCircle2 size={18} /> : <Save size={18} />}
          iconPosition="left"
          onClick={handleSave}
          className={saved ? 'bg-green-600 border-green-500 hover:bg-green-600' : ''}
        >
          {saved ? 'Settings Saved!' : 'Save Settings'}
        </Button>
        {saved && (
          <p className="text-sm text-green-400">Changes saved to localStorage successfully.</p>
        )}
      </div>
    </div>
  )
}
