# SEO Setup Guide for crystaline.co.ke

## ✅ Completed Configurations

### 1. Domain Configuration

- ✅ Updated site URL from `crytalian.co.ke` to `crystaline.co.ke`
- ✅ Fixed metadata base URL in layout
- ✅ Updated all canonical URLs

### 2. Sitemap Configuration

- ✅ Enhanced sitemap to include all pages:
  - Homepage (priority: 1.0)
  - Features (priority: 0.9)
  - Products (priority: 0.9)
  - About (priority: 0.8)
  - Resources (priority: 0.7)
  - Terms & Privacy (priority: 0.5)
  - All dynamic resource articles (priority: 0.6)
- ✅ Sitemap available at: `https://crystaline.co.ke/sitemap.xml`

### 3. Robots.txt

- ✅ Configured to allow all crawlers
- ✅ Points to sitemap
- ✅ Available at: `https://crystaline.co.ke/robots.txt`

### 4. Structured Data (JSON-LD)

- ✅ Organization schema
- ✅ Website schema
- ✅ Product schema
- ✅ FAQ schema on homepage
- ✅ Breadcrumb navigation

### 5. Meta Tags & OpenGraph

- ✅ Complete meta descriptions
- ✅ OpenGraph images (1200x630)
- ✅ Twitter Cards
- ✅ Canonical URLs on all pages
- ✅ Proper title templates

## 📋 Next Steps for Google Search Console

### Step 1: Verify Domain Ownership

You have 3 options to verify:

#### Option A: HTML Meta Tag (Recommended)

1. In Google Search Console, select "HTML tag" verification method
2. Copy the verification meta tag (looks like: `<meta name="google-site-verification" content="YOUR_CODE_HERE" />`)
3. Add it to `app/layout.tsx` in the metadata section
4. Deploy and click "Verify" in Search Console

#### Option B: HTML File Upload

1. In Search Console, download the verification HTML file
2. Place it in the `public/` folder
3. Deploy and verify

#### Option C: DNS Record (Best for production)

1. Add a TXT record to your DNS with the verification code
2. Format: `google-site-verification=YOUR_CODE`
3. Wait for DNS propagation (can take up to 48 hours)
4. Verify in Search Console

### Step 2: Submit Sitemap

1. In Google Search Console, go to "Sitemaps" section
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Google will start crawling within 24-48 hours

### Step 3: Request Indexing (Optional but Recommended)

1. Go to "URL Inspection" in Search Console
2. Enter your homepage URL: `https://crystaline.co.ke`
3. Click "Request Indexing"
4. Repeat for important pages:
   - `/features`
   - `/products`
   - `/about`
   - `/blog`

### Step 4: Check Coverage & Errors

- Monitor "Page Indexing" report for any errors
- Common issues to watch for:
  - 404 errors on pages
  - Redirect chains
  - Missing meta descriptions
  - Duplicate content

## 🚀 Testing Your Setup

### Test URLs (check these work):

```bash
# Sitemap
curl https://crystaline.co.ke/sitemap.xml

# Robots.txt
curl https://crystaline.co.ke/robots.txt

# Homepage meta tags
curl -I https://crystaline.co.ke
```

### Online SEO Tools to Validate:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
   - Paste your homepage URL to verify structured data

2. **Meta Tags Validator**: https://metatags.io/
   - Check OpenGraph and Twitter cards

3. **Schema Markup Validator**: https://validator.schema.org/
   - Verify JSON-LD structured data

4. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
   - Ensure mobile optimization

## ⚡ Additional SEO Enhancements

### Performance

- ✅ Enabled compression in Next.js config
- ✅ Using next/image for optimized images
- ✅ Font optimization with next/font
- Consider adding a CDN (Cloudflare) for better speed in Kenya

### Content Recommendations

1. **Blog Regularly**: Your `/blog` section is great - aim for 1-2 posts/month
2. **Local SEO Keywords**: Focus on "Kenya", "Nairobi", "KES" in content
3. **Case Studies**: Add more testimonials with business names and locations

### Technical

1. **HTTPS**: Ensure SSL certificate is valid
2. **Mobile Responsive**: Test on multiple devices
3. **Page Speed**: Run Lighthouse audit (aim for 90+ score)
4. **Core Web Vitals**: Monitor LCP, FID, CLS in Search Console

## 📊 Monitoring & Maintenance

### Weekly

- Check Google Search Console for new errors
- Monitor impressions and click-through rates

### Monthly

- Review which pages are getting traffic
- Update meta descriptions for low CTR pages
- Add new resource articles with target keywords

### Quarterly

- Audit and update outdated content
- Check competitor rankings
- Update product pricing and features

## 🔧 Troubleshooting

### "Page not indexed yet"

This is normal for new sites. Indexing can take:

- 1-3 days for homepage (if sitemap submitted)
- 1-2 weeks for all pages
- Can manually request indexing to speed up

### "Submitted URL not found (404)"

- Check the URL is accessible
- Ensure no redirect errors
- Run: `npm run build` locally to catch errors

### "Duplicate content without canonical"

- All pages have canonical URLs set ✅
- If errors appear, check dynamic pages

### "Missing meta description"

- All main pages have descriptions ✅
- Verify dynamic blog pages in `/blog/[slug]/page.tsx`

## 📞 Support

Need help? Check:

- Next.js SEO Docs: https://nextjs.org/learn/seo/introduction-to-seo
- Google Search Central: https://developers.google.com/search
- Kenya Digital Marketing Communities

---

**Last Updated**: March 8, 2026
**Site**: https://crystaline.co.ke
**Status**: Ready for indexing ✅
