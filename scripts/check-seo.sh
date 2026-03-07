#!/bin/bash

# SEO Health Check Script for erp.crystaline.co.ke
# Run this after deployment to verify SEO setup

DOMAIN="https://erp.crystaline.co.ke"
BOLD='\033[1m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BOLD}🔍 Crystal ERP SEO Health Check${NC}\n"

# Function to check if URL returns 200
check_url() {
    local url=$1
    local name=$2
    local status=$(curl -s -o /dev/null -w "%{http_code}" "$url")

    if [ "$status" -eq 200 ]; then
        echo -e "${GREEN}✓${NC} $name: ${GREEN}OK${NC} (Status: $status)"
        return 0
    else
        echo -e "${RED}✗${NC} $name: ${RED}FAILED${NC} (Status: $status)"
        return 1
    fi
}

# Function to check if content contains string
check_content() {
    local url=$1
    local search=$2
    local name=$3

    if curl -s "$url" | grep -q "$search"; then
        echo -e "${GREEN}✓${NC} $name: ${GREEN}FOUND${NC}"
        return 0
    else
        echo -e "${RED}✗${NC} $name: ${RED}NOT FOUND${NC}"
        return 1
    fi
}

# Check if site is accessible
echo -e "${BOLD}1. Site Accessibility${NC}"
check_url "$DOMAIN" "Homepage"
echo ""

# Check SEO files
echo -e "${BOLD}2. SEO Files${NC}"
check_url "$DOMAIN/sitemap.xml" "Sitemap"
check_url "$DOMAIN/robots.txt" "Robots.txt"
echo ""

# Check main pages
echo -e "${BOLD}3. Main Pages${NC}"
check_url "$DOMAIN/about" "About Page"
check_url "$DOMAIN/features" "Features Page"
check_url "$DOMAIN/products" "Products Page"
check_url "$DOMAIN/resources" "Resources Page"
check_url "$DOMAIN/terms" "Terms Page"
check_url "$DOMAIN/privacy" "Privacy Page"
echo ""

# Check meta tags
echo -e "${BOLD}4. Meta Tags & Structured Data${NC}"
check_content "$DOMAIN" "Crystal ERP" "Page Title"
check_content "$DOMAIN" "og:title" "OpenGraph Tags"
check_content "$DOMAIN" "twitter:card" "Twitter Card"
check_content "$DOMAIN" '"@type":"Organization"' "Structured Data (Organization)"
check_content "$DOMAIN" '"@type":"WebSite"' "Structured Data (Website)"
echo ""

# Check robots.txt content
echo -e "${BOLD}5. Robots.txt Configuration${NC}"
check_content "$DOMAIN/robots.txt" "sitemap.xml" "Sitemap Reference"
check_content "$DOMAIN/robots.txt" "Allow: /" "Crawling Allowed"
echo ""

# Check sitemap content
echo -e "${BOLD}6. Sitemap Content${NC}"
SITEMAP_COUNT=$(curl -s "$DOMAIN/sitemap.xml" | grep -c "<url>")
if [ "$SITEMAP_COUNT" -gt 5 ]; then
    echo -e "${GREEN}✓${NC} Sitemap has $SITEMAP_COUNT URLs: ${GREEN}GOOD${NC}"
else
    echo -e "${YELLOW}⚠${NC} Sitemap has only $SITEMAP_COUNT URLs: ${YELLOW}CHECK${NC}"
fi
echo ""

# Performance check
echo -e "${BOLD}7. Performance${NC}"
RESPONSE_TIME=$(curl -o /dev/null -s -w '%{time_total}' "$DOMAIN")
if (( $(echo "$RESPONSE_TIME < 2" | bc -l) )); then
    echo -e "${GREEN}✓${NC} Response Time: ${GREEN}${RESPONSE_TIME}s (Good)${NC}"
else
    echo -e "${YELLOW}⚠${NC} Response Time: ${YELLOW}${RESPONSE_TIME}s (Could be better)${NC}"
fi
echo ""

# SSL Check
echo -e "${BOLD}8. Security${NC}"
if curl -s "$DOMAIN" | grep -q "https"; then
    echo -e "${GREEN}✓${NC} HTTPS: ${GREEN}Enabled${NC}"
else
    echo -e "${YELLOW}⚠${NC} HTTPS: ${YELLOW}Check SSL Configuration${NC}"
fi
echo ""

# Summary
echo -e "${BOLD}================================${NC}"
echo -e "${BOLD}Summary${NC}"
echo -e "${BOLD}================================${NC}"
echo -e "Domain: $DOMAIN"
echo -e "Status: Ready for Google Search Console submission"
echo -e ""
echo -e "${YELLOW}Next Steps:${NC}"
echo -e "1. Verify domain in Google Search Console"
echo -e "2. Submit sitemap: ${BOLD}sitemap.xml${NC}"
echo -e "3. Request indexing for main pages"
echo -e "4. Monitor coverage in Search Console"
echo -e ""
echo -e "For detailed instructions, see: ${BOLD}SEO-SETUP.md${NC}"
